import React from 'react';
import type { Message } from '../../types/chat';
import { User, Bot, Copy, Check } from 'lucide-react';

interface MessageProps {
  message: Message;
}

export const MessageComponent: React.FC<MessageProps> = ({ message }) => {
  const [copied, setCopied] = React.useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  return (
    <div className={`message ${message.role}`}>
      <div className="message-avatar">
        {message.role === 'user' ? (
          <User size={20} />
        ) : (
          <Bot size={20} />
        )}
      </div>
      
      <div className="message-content">
        <div className="message-text">
          {message.isTyping ? (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            message.content
          )}
        </div>
        
        {!message.isTyping && (
          <div className="message-actions">
            <button 
              onClick={handleCopy}
              className="copy-button"
              title="Copiar mensagem"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};