# 🔧 BACKEND INTEGRATION GUIDE - For Backend Team

## 📋 Overview

This document is specifically for the **backend development team** to understand what APIs need to be built for the Riva healthcare platform.

---

## 🎯 Quick Summary

### What's Ready
- ✅ Complete frontend (20 components)
- ✅ All UI/UX designed and implemented
- ✅ Routing configured
- ✅ Forms with validation ready
- ✅ State management ready
- ✅ 9 integration points marked in code

### What You Need to Build
- 🔧 Authentication system (login, signup, logout)
- 🔧 Health metrics API (read vital signs)
- 🔧 Medication tracking API (mark taken/missed)
- 🔧 Appointments API (list, book, cancel)
- 🔧 AI chat API (send/receive messages)
- 🔧 User profile API (read, update)

---

## 🏗️ Database Schema Recommendations

### 1. Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'patient', -- patient, doctor, caregiver
  date_of_birth DATE,
  address TEXT,
  emergency_contact VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);
```

### 2. Health Metrics Table
```sql
CREATE TABLE health_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  metric_type VARCHAR(50) NOT NULL, -- heartRate, bloodPressure, bloodSugar, weight
  value DECIMAL(10, 2) NOT NULL,
  unit VARCHAR(20) NOT NULL, -- bpm, mg/dL, kg, etc.
  systolic INTEGER, -- for blood pressure
  diastolic INTEGER, -- for blood pressure
  status VARCHAR(20), -- normal, high, low
  timestamp TIMESTAMP NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_health_metrics_user_date ON health_metrics(user_id, timestamp DESC);
```

### 3. Medications Table
```sql
CREATE TABLE medications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  dose VARCHAR(100) NOT NULL, -- "100mg", "2 pills"
  frequency VARCHAR(100) NOT NULL, -- "once daily", "twice daily"
  time TIME NOT NULL, -- "08:00:00"
  time_of_day VARCHAR(20), -- "morning", "evening"
  instructions TEXT,
  status VARCHAR(20) DEFAULT 'active', -- active, inactive, discontinued
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Medication Logs Table (⭐ CRITICAL)
```sql
CREATE TABLE medication_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medication_id UUID REFERENCES medications(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(20) NOT NULL, -- taken, missed
  scheduled_time TIMESTAMP NOT NULL,
  actual_time TIMESTAMP,
  on_time BOOLEAN,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_medication_logs_user_date ON medication_logs(user_id, created_at DESC);
```

### 5. Doctors Table
```sql
CREATE TABLE doctors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  image_url TEXT,
  specialty VARCHAR(100) NOT NULL,
  experience VARCHAR(50), -- "15+ years"
  rating DECIMAL(3, 2), -- 4.90
  reviews_count INTEGER DEFAULT 0,
  languages TEXT[], -- ["English", "Arabic"]
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 6. Appointments Table
```sql
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  doctor_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  duration INTEGER DEFAULT 30, -- minutes
  type VARCHAR(20) DEFAULT 'video', -- video, in-person
  status VARCHAR(20) DEFAULT 'pending', -- pending, confirmed, completed, cancelled
  video_link TEXT,
  reason TEXT,
  notes TEXT,
  confirmation_number VARCHAR(50) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_appointments_user_date ON appointments(user_id, appointment_date, appointment_time);
```

### 7. Chat Messages Table
```sql
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  conversation_id UUID NOT NULL,
  from_user BOOLEAN, -- true if from user, false if from AI
  message TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW(),
  metadata JSONB -- for AI context, etc.
);

CREATE INDEX idx_chat_messages_conversation ON chat_messages(conversation_id, timestamp);
```

---

## 🔐 Authentication Flow

### Required Endpoints

#### 1. POST /auth/register
**Frontend File**: `Login.tsx` (line 23)

**Request Body**:
```json
{
  "fullName": "Ahmed Hassan",
  "email": "ahmed@example.com",
  "phone": "+20 123 456 7890",
  "password": "securePassword123"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "userId": "uuid-here",
    "token": "jwt-token-here",
    "refreshToken": "refresh-token-here",
    "user": {
      "id": "uuid-here",
      "fullName": "Ahmed Hassan",
      "email": "ahmed@example.com"
    }
  }
}
```

**Backend Implementation**:
```javascript
// Example with Node.js/Express
router.post('/auth/register', async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;
    
    // Validate input
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Missing required fields' }
      });
    }
    
    // Check if user exists
    const existingUser = await db.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );
    
    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        success: false,
        error: { code: 'USER_EXISTS', message: 'Email already registered' }
      });
    }
    
    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);
    
    // Create user
    const result = await db.query(
      'INSERT INTO users (full_name, email, phone, password_hash) VALUES ($1, $2, $3, $4) RETURNING id, full_name, email',
      [fullName, email, phone, passwordHash]
    );
    
    const user = result.rows[0];
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({
      success: true,
      data: {
        userId: user.id,
        token,
        refreshToken,
        user: {
          id: user.id,
          fullName: user.full_name,
          email: user.email
        }
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      error: { code: 'INTERNAL_ERROR', message: 'Registration failed' }
    });
  }
});
```

#### 2. POST /auth/login
**Frontend File**: `Login.tsx` (line 23)

**Request Body**:
```json
{
  "email": "ahmed@example.com",
  "password": "securePassword123"
}
```

**Response**: Same as register

**Backend Implementation**:
```javascript
router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const result = await db.query(
      'SELECT id, full_name, email, password_hash FROM users WHERE email = $1',
      [email]
    );
    
    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        error: { code: 'INVALID_CREDENTIALS', message: 'Invalid email or password' }
      });
    }
    
    const user = result.rows[0];
    
    // Verify password
    const isValid = await bcrypt.compare(password, user.password_hash);
    
    if (!isValid) {
      return res.status(401).json({
        success: false,
        error: { code: 'INVALID_CREDENTIALS', message: 'Invalid email or password' }
      });
    }
    
    // Update last login
    await db.query(
      'UPDATE users SET last_login = NOW() WHERE id = $1',
      [user.id]
    );
    
    // Generate tokens
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      success: true,
      data: {
        token,
        refreshToken,
        user: {
          id: user.id,
          fullName: user.full_name,
          email: user.email
        }
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: { code: 'INTERNAL_ERROR', message: 'Login failed' }
    });
  }
});
```

#### 3. POST /auth/logout
**Frontend File**: `DashboardSidebar.tsx` (line 16)

**Headers**: `Authorization: Bearer {token}`

**Response**:
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## 💊 Medication Tracking (⭐ MOST CRITICAL)

### POST /medications/taken
**Frontend File**: `MedicationsTab.tsx` (line 14)

**Request Body**:
```json
{
  "medicationId": "uuid-here",
  "timestamp": "2026-02-07T08:15:00Z",
  "status": "taken",
  "notes": "Taken with breakfast"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Medication marked as taken",
  "data": {
    "id": "log-uuid",
    "medicationId": "uuid-here",
    "medicationName": "Aspirin",
    "status": "taken",
    "timestamp": "2026-02-07T08:15:00Z",
    "onTime": true
  }
}
```

**Backend Implementation**:
```javascript
router.post('/medications/taken', authenticateToken, async (req, res) => {
  try {
    const { medicationId, timestamp, notes } = req.body;
    const userId = req.user.userId; // from JWT
    
    // Get medication details
    const medResult = await db.query(
      'SELECT id, name, time FROM medications WHERE id = $1 AND user_id = $2',
      [medicationId, userId]
    );
    
    if (medResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: { code: 'NOT_FOUND', message: 'Medication not found' }
      });
    }
    
    const medication = medResult.rows[0];
    const actualTime = new Date(timestamp);
    const scheduledTime = new Date(timestamp);
    scheduledTime.setHours(parseInt(medication.time.split(':')[0]));
    scheduledTime.setMinutes(parseInt(medication.time.split(':')[1]));
    
    // Check if on time (within 30 minutes)
    const timeDiff = Math.abs(actualTime - scheduledTime) / 1000 / 60; // minutes
    const onTime = timeDiff <= 30;
    
    // Insert log
    const logResult = await db.query(
      `INSERT INTO medication_logs 
       (medication_id, user_id, status, scheduled_time, actual_time, on_time, notes) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING id`,
      [medicationId, userId, 'taken', scheduledTime, actualTime, onTime, notes]
    );
    
    res.json({
      success: true,
      message: 'Medication marked as taken',
      data: {
        id: logResult.rows[0].id,
        medicationId,
        medicationName: medication.name,
        status: 'taken',
        timestamp,
        onTime
      }
    });
  } catch (error) {
    console.error('Medication tracking error:', error);
    res.status(500).json({
      success: false,
      error: { code: 'INTERNAL_ERROR', message: 'Failed to log medication' }
    });
  }
});
```

### POST /medications/missed
**Frontend File**: `MedicationsTab.tsx` (line 20)

Similar implementation to `/taken` but with `status: 'missed'`

---

## 📊 Health Metrics

### GET /health/metrics
**Frontend File**: `OverviewTab.tsx`

**Headers**: `Authorization: Bearer {token}`

**Query Parameters**: `?date=2026-02-07` (optional)

**Response**:
```json
{
  "success": true,
  "data": {
    "date": "2026-02-07",
    "metrics": {
      "heartRate": {
        "value": 72,
        "unit": "bpm",
        "status": "normal",
        "timestamp": "2026-02-07T08:30:00Z"
      },
      "bloodPressure": {
        "systolic": 120,
        "diastolic": 80,
        "status": "good",
        "timestamp": "2026-02-07T08:30:00Z"
      },
      "bloodSugar": {
        "value": 95,
        "unit": "mg/dL",
        "status": "normal",
        "timestamp": "2026-02-07T08:30:00Z"
      }
    }
  }
}
```

**Backend Implementation**:
```javascript
router.get('/health/metrics', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const date = req.query.date || new Date().toISOString().split('T')[0];
    
    // Get latest metrics for the day
    const result = await db.query(
      `SELECT DISTINCT ON (metric_type)
         metric_type, value, unit, systolic, diastolic, status, timestamp
       FROM health_metrics
       WHERE user_id = $1 
         AND DATE(timestamp) = $2
       ORDER BY metric_type, timestamp DESC`,
      [userId, date]
    );
    
    const metrics = {};
    result.rows.forEach(row => {
      if (row.metric_type === 'bloodPressure') {
        metrics.bloodPressure = {
          systolic: row.systolic,
          diastolic: row.diastolic,
          status: row.status,
          timestamp: row.timestamp
        };
      } else {
        metrics[row.metric_type] = {
          value: parseFloat(row.value),
          unit: row.unit,
          status: row.status,
          timestamp: row.timestamp
        };
      }
    });
    
    res.json({
      success: true,
      data: {
        date,
        metrics
      }
    });
  } catch (error) {
    console.error('Health metrics error:', error);
    res.status(500).json({
      success: false,
      error: { code: 'INTERNAL_ERROR', message: 'Failed to fetch metrics' }
    });
  }
});
```

---

## 📅 Appointments

### GET /appointments
**Frontend File**: `AppointmentsTab.tsx`

**Headers**: `Authorization: Bearer {token}`

**Query Parameters**: `?status=upcoming&limit=10`

**Response**: See API_DOCUMENTATION.md line 254

### POST /appointments
**Frontend File**: `AppointmentsTab.tsx` (Book New button)

**Request Body**:
```json
{
  "doctorId": "doc-uuid",
  "date": "2026-02-20",
  "time": "15:00",
  "type": "video",
  "reason": "Regular checkup"
}
```

---

## 💬 AI Chat

### POST /ai/chat
**Frontend File**: `ChatTab.tsx` (line 12)

**Headers**: `Authorization: Bearer {token}`

**Request Body**:
```json
{
  "message": "What should I do if I miss my medication?",
  "conversationId": "conv-uuid"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "reply": "If you miss a medication dose, take it as soon as you remember...",
    "conversationId": "conv-uuid",
    "messageId": "msg-uuid",
    "timestamp": "2026-02-07T10:30:00Z"
  }
}
```

**Backend Implementation** (with OpenAI):
```javascript
router.post('/ai/chat', authenticateToken, async (req, res) => {
  try {
    const { message, conversationId } = req.body;
    const userId = req.user.userId;
    
    // Get conversation history for context
    const historyResult = await db.query(
      `SELECT message, from_user FROM chat_messages 
       WHERE user_id = $1 AND conversation_id = $2 
       ORDER BY timestamp DESC LIMIT 10`,
      [userId, conversationId]
    );
    
    const messages = [
      { role: 'system', content: 'You are a helpful healthcare assistant for seniors.' },
      ...historyResult.rows.reverse().map(row => ({
        role: row.from_user ? 'user' : 'assistant',
        content: row.message
      })),
      { role: 'user', content: message }
    ];
    
    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages
    });
    
    const reply = completion.choices[0].message.content;
    
    // Save messages
    await db.query(
      `INSERT INTO chat_messages (user_id, conversation_id, from_user, message) 
       VALUES ($1, $2, $3, $4)`,
      [userId, conversationId, true, message]
    );
    
    const messageResult = await db.query(
      `INSERT INTO chat_messages (user_id, conversation_id, from_user, message) 
       VALUES ($1, $2, $3, $4) RETURNING id, timestamp`,
      [userId, conversationId, false, reply]
    );
    
    res.json({
      success: true,
      data: {
        reply,
        conversationId,
        messageId: messageResult.rows[0].id,
        timestamp: messageResult.rows[0].timestamp
      }
    });
  } catch (error) {
    console.error('AI chat error:', error);
    res.status(500).json({
      success: false,
      error: { code: 'INTERNAL_ERROR', message: 'AI chat failed' }
    });
  }
});
```

---

## 👤 User Profile

### GET /users/profile
**Frontend File**: `ProfileTab.tsx`

### PUT /users/profile
**Frontend File**: `ProfileTab.tsx` (line 16)

---

## 🔒 Middleware

### Authentication Middleware
```javascript
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) {
    return res.status(401).json({
      success: false,
      error: { code: 'UNAUTHORIZED', message: 'No token provided' }
    });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        error: { code: 'FORBIDDEN', message: 'Invalid or expired token' }
      });
    }
    
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
```

---

## 🚀 Priority Order

Build APIs in this order:

1. **Week 1**: Authentication (login, signup, logout)
2. **Week 2**: Medications (⭐ MOST CRITICAL - list, mark taken, mark missed)
3. **Week 3**: Health Metrics (read vitals)
4. **Week 4**: Appointments (list, book, cancel)
5. **Week 5**: AI Chat (send, receive)
6. **Week 6**: Profile (read, update)

---

## 📝 Environment Variables

Create `.env` file:
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/riva

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_REFRESH_SECRET=your-refresh-token-secret

# OpenAI (for AI chat)
OPENAI_API_KEY=sk-your-openai-key

# Server
PORT=3000
NODE_ENV=production

# CORS
ALLOWED_ORIGINS=https://riva.care,http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100
```

---

## 🧪 Testing

Test endpoints with:
```bash
# Register
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Get Health Metrics (use token from login)
curl http://localhost:3000/health/metrics \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 📦 Dependencies

Install these packages:
```bash
npm install express pg bcrypt jsonwebtoken cors dotenv helmet express-rate-limit
npm install --save-dev nodemon
```

---

## ✅ Backend Checklist

- [ ] Set up database (PostgreSQL recommended)
- [ ] Create all tables (schema above)
- [ ] Install dependencies
- [ ] Set up authentication (JWT)
- [ ] Implement register endpoint
- [ ] Implement login endpoint
- [ ] Implement logout endpoint
- [ ] Implement medications list endpoint
- [ ] Implement mark medication taken endpoint ⭐
- [ ] Implement mark medication missed endpoint ⭐
- [ ] Implement health metrics endpoint
- [ ] Implement appointments list endpoint
- [ ] Implement book appointment endpoint
- [ ] Implement AI chat endpoint
- [ ] Implement profile endpoints
- [ ] Add rate limiting
- [ ] Add CORS configuration
- [ ] Add error handling
- [ ] Write tests
- [ ] Deploy to production

---

## 🎯 Success Criteria

Your backend is ready when:
1. ✅ Frontend can login/signup
2. ✅ Dashboard displays health metrics
3. ✅ Medications can be marked taken/missed
4. ✅ Appointments display correctly
5. ✅ AI chat responds
6. ✅ Profile can be updated
7. ✅ All endpoints return proper errors
8. ✅ Authentication works correctly
9. ✅ Rate limiting is active
10. ✅ All data persists in database

---

**Good luck with the backend!** 🚀

For complete API specification, see `API_DOCUMENTATION.md`
