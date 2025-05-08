
import React from "react";
import { ChatMessage as ChatMessageType } from "@/lib/chatUtils";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 p-4 animate-slide-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
            <Bot size={16} />
          </div>
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2",
          isUser
            ? "bg-white text-black border border-gray-200 rounded-tr-none"
            : "bg-gray-100 text-black rounded-tl-none"
        )}
      >
        <p className="text-sm">{message.content}</p>
      </div>
      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-black">
            <User size={16} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
