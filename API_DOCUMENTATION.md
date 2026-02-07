# Backend API Endpoints Specification

## Base URL
```
https://api.riva.care/v1
```

## Authentication Endpoints

### 1. Register New User
```
POST /auth/register
```

**Request Body:**
```json
{
  "fullName": "Ahmed Hassan",
  "email": "ahmed@example.com",
  "phone": "+20 123 456 7890",
  "password": "securePassword123",
  "role": "patient"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "userId": "user_123456",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "refresh_token_here",
    "user": {
      "id": "user_123456",
      "fullName": "Ahmed Hassan",
      "email": "ahmed@example.com",
      "phone": "+20 123 456 7890",
      "role": "patient"
    }
  }
}
```

### 2. User Login
```
POST /auth/login
```

**Request Body:**
```json
{
  "email": "ahmed@example.com",
  "password": "securePassword123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "refresh_token_here",
    "user": {
      "id": "user_123456",
      "fullName": "Ahmed Hassan",
      "email": "ahmed@example.com",
      "role": "patient"
    }
  }
}
```

### 3. Logout
```
POST /auth/logout
Headers: Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## User Profile Endpoints

### 4. Get User Profile
```
GET /users/profile
Headers: Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "user_123456",
    "fullName": "Ahmed Hassan",
    "email": "ahmed@example.com",
    "phone": "+20 123 456 7890",
    "dateOfBirth": "1950-05-15",
    "address": "Cairo, Egypt",
    "emergencyContact": "+20 987 654 3210",
    "createdAt": "2026-01-01T00:00:00Z"
  }
}
```

### 5. Update User Profile
```
PUT /users/profile
Headers: Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "fullName": "Ahmed Hassan",
  "email": "ahmed@example.com",
  "phone": "+20 123 456 7890",
  "address": "Cairo, Egypt"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "id": "user_123456",
    "fullName": "Ahmed Hassan",
    "email": "ahmed@example.com",
    "phone": "+20 123 456 7890"
  }
}
```

---

## Health Metrics Endpoints

### 6. Get Health Metrics
```
GET /health/metrics
Headers: Authorization: Bearer {token}
Query Parameters: ?date=2026-02-07 (optional, defaults to today)
```

**Response (200 OK):**
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
      },
      "weight": {
        "value": 75,
        "unit": "kg",
        "timestamp": "2026-02-07T07:00:00Z"
      }
    }
  }
}
```

### 7. Add Health Metric
```
POST /health/metrics
Headers: Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "metricType": "heartRate",
  "value": 72,
  "unit": "bpm",
  "timestamp": "2026-02-07T08:30:00Z"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Health metric recorded successfully",
  "data": {
    "id": "metric_123456",
    "metricType": "heartRate",
    "value": 72,
    "unit": "bpm",
    "status": "normal",
    "timestamp": "2026-02-07T08:30:00Z"
  }
}
```

---

## Medications Endpoints

### 8. Get Medications List
```
GET /medications
Headers: Authorization: Bearer {token}
Query Parameters: ?date=2026-02-07 (optional)
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "medications": [
      {
        "id": "med_001",
        "name": "Aspirin",
        "dose": "100mg",
        "frequency": "once daily",
        "time": "08:00",
        "timeOfDay": "morning",
        "instructions": "Take with food",
        "status": "active",
        "nextDose": "2026-02-08T08:00:00Z"
      },
      {
        "id": "med_002",
        "name": "Metformin",
        "dose": "500mg",
        "frequency": "twice daily",
        "time": "08:00",
        "timeOfDay": "morning",
        "instructions": "Take with breakfast",
        "status": "active",
        "nextDose": "2026-02-07T08:00:00Z"
      },
      {
        "id": "med_003",
        "name": "Lisinopril",
        "dose": "10mg",
        "frequency": "once daily",
        "time": "20:00",
        "timeOfDay": "evening",
        "instructions": "Take before bed",
        "status": "active",
        "nextDose": "2026-02-07T20:00:00Z"
      }
    ]
  }
}
```

### 9. Mark Medication as Taken
```
POST /medications/taken
Headers: Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "medicationId": "med_001",
  "timestamp": "2026-02-07T08:15:00Z",
  "status": "taken",
  "notes": "Taken with breakfast"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Medication marked as taken",
  "data": {
    "id": "log_123456",
    "medicationId": "med_001",
    "medicationName": "Aspirin",
    "status": "taken",
    "timestamp": "2026-02-07T08:15:00Z",
    "scheduledTime": "2026-02-07T08:00:00Z",
    "onTime": true
  }
}
```

### 10. Mark Medication as Missed
```
POST /medications/missed
Headers: Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "medicationId": "med_001",
  "timestamp": "2026-02-07T08:15:00Z",
  "status": "missed",
  "reason": "Forgot"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Medication marked as missed",
  "data": {
    "id": "log_123456",
    "medicationId": "med_001",
    "medicationName": "Aspirin",
    "status": "missed",
    "timestamp": "2026-02-07T08:15:00Z",
    "scheduledTime": "2026-02-07T08:00:00Z"
  }
}
```

---

## Appointments Endpoints

### 11. Get Appointments
```
GET /appointments
Headers: Authorization: Bearer {token}
Query Parameters: ?status=upcoming&limit=10
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "appointments": [
      {
        "id": "appt_001",
        "doctorId": "doc_001",
        "doctorName": "Dr. Michael Chen",
        "doctorImage": "https://images.unsplash.com/...",
        "specialty": "Cardiologist",
        "date": "2026-02-15",
        "time": "14:00",
        "duration": 30,
        "type": "video",
        "status": "confirmed",
        "videoLink": "https://meet.riva.care/appt_001",
        "notes": "Regular checkup"
      },
      {
        "id": "appt_002",
        "doctorId": "doc_002",
        "doctorName": "Dr. Ahmed Hassan",
        "doctorImage": "https://images.unsplash.com/...",
        "specialty": "General Physician",
        "date": "2026-02-18",
        "time": "10:00",
        "duration": 45,
        "type": "video",
        "status": "confirmed",
        "videoLink": "https://meet.riva.care/appt_002",
        "notes": "Follow-up appointment"
      }
    ]
  }
}
```

### 12. Book New Appointment
```
POST /appointments
Headers: Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "doctorId": "doc_001",
  "date": "2026-02-20",
  "time": "15:00",
  "type": "video",
  "reason": "Regular checkup"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Appointment booked successfully",
  "data": {
    "id": "appt_003",
    "doctorId": "doc_001",
    "doctorName": "Dr. Michael Chen",
    "date": "2026-02-20",
    "time": "15:00",
    "status": "pending",
    "confirmationNumber": "APPT-2026-003"
  }
}
```

### 13. Cancel Appointment
```
DELETE /appointments/{appointmentId}
Headers: Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Appointment cancelled successfully"
}
```

---

## AI Chat Endpoints

### 14. Send Message to AI
```
POST /ai/chat
Headers: Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "message": "What should I do if I miss my medication?",
  "conversationId": "conv_123456"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "reply": "If you miss a medication dose, take it as soon as you remember. However, if it's almost time for your next dose, skip the missed dose and continue with your regular schedule. Never take a double dose. If you frequently miss doses, consider setting reminders or talking to your doctor about a simpler medication schedule.",
    "conversationId": "conv_123456",
    "messageId": "msg_789",
    "timestamp": "2026-02-07T10:30:00Z"
  }
}
```

### 15. Get Chat History
```
GET /ai/chat/history
Headers: Authorization: Bearer {token}
Query Parameters: ?conversationId=conv_123456&limit=50
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "messages": [
      {
        "id": "msg_788",
        "from": "user",
        "message": "What should I do if I miss my medication?",
        "timestamp": "2026-02-07T10:29:00Z"
      },
      {
        "id": "msg_789",
        "from": "ai",
        "message": "If you miss a medication dose...",
        "timestamp": "2026-02-07T10:30:00Z"
      }
    ]
  }
}
```

---

## Doctors Endpoints

### 16. Get Doctors List
```
GET /doctors
Query Parameters: ?specialty=cardiologist&available=true
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "doctors": [
      {
        "id": "doc_001",
        "name": "Dr. Michael Chen",
        "image": "https://images.unsplash.com/...",
        "specialty": "Cardiologist",
        "experience": "15 years",
        "rating": 4.9,
        "reviewsCount": 234,
        "languages": ["English", "Arabic"],
        "availability": {
          "nextAvailable": "2026-02-15T14:00:00Z",
          "schedule": [
            {
              "day": "Monday",
              "slots": ["09:00", "10:00", "14:00", "15:00"]
            }
          ]
        }
      }
    ]
  }
}
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "success": false,
  "error": {
    "code": "INVALID_INPUT",
    "message": "Invalid email format",
    "details": {
      "field": "email"
    }
  }
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired token"
  }
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource not found"
  }
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An unexpected error occurred"
  }
}
```

---

## Authentication

All protected endpoints require JWT token in the Authorization header:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Token expires after 24 hours. Use the refresh token endpoint to get a new token.

---

## Rate Limiting

- **Authentication endpoints**: 5 requests per minute
- **All other endpoints**: 100 requests per minute

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1612345678
```
