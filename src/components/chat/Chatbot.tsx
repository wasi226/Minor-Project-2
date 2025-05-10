import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Camera, Loader, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../../types';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! I am the Virtual Herbal Garden Assistant. How can I help you with medicinal plants today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSend = () => {
    if (input.trim() === '') return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleFileUpload = () => {
    setIsUploading(true);
    
    // Simulate file upload and processing
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: Date.now().toString(),
        text: "I've identified this plant as Tulsi (Holy Basil). Tulsi is one of the most sacred plants in India and is used extensively in Ayurveda for its remarkable healing properties including adaptogenic, anti-inflammatory, and immunomodulatory effects.",
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsUploading(false);
    }, 2000);
  };
  
  const generateBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('tulsi') || lowerQuery.includes('holy basil')) {
      return "Tulsi (Holy Basil) is one of the most sacred herbs in India. In Ayurveda, it's used for respiratory conditions, stress relief, and immune support. It has adaptogenic properties that help the body cope with stress.";
    } else if (lowerQuery.includes('ashwagandha')) {
      return "Ashwagandha is a powerful adaptogenic herb used in Ayurveda. It helps reduce stress and anxiety, improves concentration, and supports overall vitality. It's often used for promoting restful sleep and supporting the nervous system.";
    } else if (lowerQuery.includes('neem') || lowerQuery.includes('azadirachta indica')) {
      return "Neem (Azadirachta indica) is known as the 'village pharmacy' in India. It has powerful antibacterial, antifungal, and blood-purifying properties. In Ayurveda, it's used for skin disorders, diabetes management, and oral health.";
    } else if (lowerQuery.includes('turmeric') || lowerQuery.includes('curcuma longa')) {
      return "Turmeric (Curcuma longa) contains curcumin, which has powerful anti-inflammatory properties. In Ayurveda, it's used for pain relief, improving digestion, and supporting liver function. It's also known for its antioxidant properties.";
    } else if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Hello! I'm your Virtual Herbal Garden Assistant. I can help you identify plants, share information about medicinal herbs used in AYUSH systems, and answer questions about their uses and cultivation. How may I assist you today?";
    } else {
      return "That's an interesting question about medicinal plants. In the AYUSH systems, plants are categorized based on their therapeutic properties and effects on the body's doshas or energies. Would you like me to share more specific information about a particular plant or healing tradition?";
    }
  };
  
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden h-[600px] max-h-[80vh]">
      <div className="bg-primary-600 text-white p-4">
        <h2 className="text-xl font-medium flex items-center">
          <Bot className="mr-2 h-5 w-5" />
          Virtual Herbal Assistant
        </h2>
        <p className="text-primary-100 text-sm">Ask me anything about medicinal plants</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex mb-4 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`flex items-start max-w-[75%] ${
                  message.sender === 'user'
                    ? 'bg-secondary-600 text-white rounded-tl-xl rounded-tr-sm rounded-bl-xl'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tr-xl rounded-tl-sm rounded-br-xl'
                } p-3 shadow-sm`}
              >
                <div className="flex-shrink-0 mr-3">
                  {message.sender === 'user' ? (
                    <User className="h-5 w-5 text-secondary-100" />
                  ) : (
                    <Bot className="h-5 w-5 text-primary-600" />
                  )}
                </div>
                <div>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex mb-4 justify-start"
          >
            <div className="bg-white border border-gray-200 text-gray-800 rounded-tr-xl rounded-tl-sm rounded-br-xl p-3 shadow-sm">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-primary-400 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2 w-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </motion.div>
        )}
        
        {isUploading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex mb-4 justify-start"
          >
            <div className="bg-white border border-gray-200 text-gray-800 rounded-tr-xl rounded-tl-sm rounded-br-xl p-3 shadow-sm flex items-center">
              <Loader className="h-5 w-5 text-primary-600 animate-spin mr-2" />
              <span className="text-sm">Analyzing your plant image...</span>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <button
            onClick={handleFileUpload}
            className="p-2 text-gray-500 hover:text-primary-600 focus:outline-none"
          >
            <Camera className="h-5 w-5" />
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about medicinal plants..."
            className="flex-1 py-2 px-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 mx-2"
          />
          
          {input ? (
            <button
              onClick={handleSend}
              className="p-2 text-white bg-primary-600 rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <Send className="h-4 w-4" />
            </button>
          ) : (
            <button
              disabled
              className="p-2 text-white bg-gray-300 rounded-full cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;