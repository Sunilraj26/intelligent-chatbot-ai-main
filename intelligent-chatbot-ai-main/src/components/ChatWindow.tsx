
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ChatMessage as ChatMessageType } from "@/lib/chatUtils";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { cn } from "@/lib/utils";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessageType[];
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  isOpen,
  onClose,
  messages,
  onSendMessage,
  isTyping,
}) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      className={cn(
        "fixed bottom-20 right-4 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-xl flex flex-col transition-all duration-300 ease-in-out origin-bottom-right z-50",
        isOpen
          ? "opacity-100 scale-100 h-[500px] max-h-[80vh]"
          : "opacity-0 scale-90 h-0 pointer-events-none"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b bg-black text-white rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-sm font-semibold">AI</span>
          </div>
          <div>
            <h3 className="font-bold">Customer Support</h3>
            <p className="text-xs text-white/70">We typically reply in a few minutes</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
          <X size={18} />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-2">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500 text-center p-4">
            <p>Send a message to start the conversation</p>
          </div>
        ) : (
          messages.map((message) => <ChatMessage key={message.id} message={message} />)
        )}
        {isTyping && (
          <div className="flex items-center p-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-300"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSendMessage={onSendMessage} disabled={isTyping} />
    </div>
  );
};

export default ChatWindow;
