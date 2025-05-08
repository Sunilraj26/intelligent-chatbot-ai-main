
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type ChatHistory = ChatMessage[];

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

export const formatTimestamp = (timestamp: Date): string => {
  return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Simple response generation based on user input
export const generateResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  // Common customer support queries
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! Welcome to our customer support. How can I help you today?";
  }
  
  if (lowerMessage.includes('help')) {
    return "I'm here to help! Please let me know what issue you're experiencing, and I'll do my best to assist you.";
  }

  if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
    return "Our pricing is flexible based on your needs. We offer Basic ($10/mo), Pro ($25/mo), and Enterprise (custom pricing) plans. Would you like more details about any specific plan?";
  }
  
  if (lowerMessage.includes('refund') || lowerMessage.includes('money back')) {
    return "We offer a 30-day money-back guarantee. To process a refund, please provide your order number, and I can help you with the next steps.";
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('human') || lowerMessage.includes('agent')) {
    return "If you'd like to speak with a human agent, you can call us at (555) 123-4567 during business hours (9 AM - 5 PM EST) or email support@example.com. Would you like me to arrange a callback?";
  }

  if (lowerMessage.includes('account') || lowerMessage.includes('login') || lowerMessage.includes('password')) {
    return "For account-related issues, you can reset your password through the login page. If you're still experiencing problems, please provide your email address, and I'll look into it.";
  }

  if (lowerMessage.includes('bug') || lowerMessage.includes('error') || lowerMessage.includes('issue')) {
    return "I'm sorry to hear you're experiencing an issue. Could you please describe the problem in detail, including any error messages you're seeing? Screenshots are also helpful if available.";
  }
  
  if (lowerMessage.includes('thank')) {
    return "You're welcome! Is there anything else I can help you with today?";
  }
  
  if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
    return "Thank you for chatting with us today. If you have any more questions, feel free to come back anytime!";
  }

  // Default response
  return "Thank you for your message. How can I assist you further with your question?";
};
