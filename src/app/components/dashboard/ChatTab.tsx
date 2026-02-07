// ============================================
// CHAT TAB - AI Assistant chat interface
// ============================================
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ChatTab() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // TODO: Backend - Send message to AI assistant
    // Example: await sendMessageToAI(message);
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <motion.div 
      className="bg-white rounded-3xl shadow-lg border border-gray-100 h-[calc(100vh-240px)] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Chat Header */}
      <div className="p-8 border-b border-gray-200">
        <h2 className="inter-sans font-bold text-2xl text-gray-900">
          AI Health Assistant
        </h2>
        <p className="inter-sans text-lg text-gray-600 mt-1">
          Ask me anything about your health
        </p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-8 overflow-auto space-y-6">
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl rounded-tl-none p-6 max-w-md border border-sky-100">
            <p className="inter-sans text-lg text-gray-900">
              Hello Ahmed! How can I help you today? 👋
            </p>
          </div>
        </motion.div>
      </div>

      {/* Chat Input */}
      <div className="p-8 border-t border-gray-200">
        <div className="flex gap-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-2xl inter-sans text-lg focus:border-sky-500 focus:outline-none"
          />
          <motion.button 
            onClick={handleSend}
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-2xl inter-sans font-bold text-lg hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
