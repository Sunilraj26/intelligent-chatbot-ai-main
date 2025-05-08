
import React from "react";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Intelligent AI Customer Support
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience our AI-powered customer support chatbot. Click the chat bubble
          in the bottom right corner to start a conversation.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Common Questions Our AI Can Help With
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800">Pricing Information</h3>
              <p className="text-gray-600">Ask about our different pricing plans and options</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800">Account Issues</h3>
              <p className="text-gray-600">Get help with login problems or account setup</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800">Refund Requests</h3>
              <p className="text-gray-600">Learn about our refund policy and process</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800">Technical Support</h3>
              <p className="text-gray-600">Report bugs or get help with technical issues</p>
            </div>
          </div>
        </div>
        
        <div className="text-gray-500 text-sm">
          <p>This is a demo chatbot with predefined responses.</p>
          <p>In a production environment, this would connect to a real AI service.</p>
        </div>
      </div>

      {/* ChatBot Component */}
      <ChatBot />
    </div>
  );
};

export default Index;
