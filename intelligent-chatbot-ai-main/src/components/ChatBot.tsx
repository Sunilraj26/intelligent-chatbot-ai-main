
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./ChatWindow";
import { useToast } from "@/components/ui/use-toast";
import { ChatMessage, ChatHistory, generateId, generateResponse } from "@/lib/chatUtils";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatHistory>([]);
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  // Add welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: generateId(),
        role: "assistant",
        content: "👋 Hi there! How can I help you today?",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: generateId(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response with a delay
    setTimeout(() => {
      const response = generateResponse(content);
      const assistantMessage: ChatMessage = {
        id: generateId(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500); // Simulate typing delay for realism
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={handleToggleChat}
        className={`fixed bottom-4 right-4 w-14 h-14 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isOpen ? "bg-gray-800 rotate-90" : "bg-black"
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        onSendMessage={handleSendMessage}
        isTyping={isTyping}
      />
    </>
  );
};

export default ChatBot;
