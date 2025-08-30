import React, { useState, useCallback } from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import type { Message } from '../../types/chat';
import { generateBotResponse } from '../../utils/chatService';
import { v4 as uuidv4 } from 'uuid';

export const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((content: string, role: 'user' | 'assistant', isTyping = false) => {
    const newMessage: Message = {
      id: uuidv4(),
      content,
      role,
      timestamp: new Date(),
      isTyping,
    };
    
    setMessages(prev => [...prev, newMessage]);
    return newMessage.id;
  }, []);

  const updateMessage = useCallback((messageId: string, content: string, isTyping = false) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, content, isTyping }
          : msg
      )
    );
  }, []);

  const handleSendMessage = async (content: string) => {
    // Adiciona mensagem do user
    addMessage(content, 'user');
    
    setIsLoading(true);
    
    // Adiciona mensagem do bot
    const botMessageId = addMessage('', 'assistant', true);
    
    try {
      const response = await generateBotResponse(content);
      updateMessage(botMessageId, response, false);
    } catch (error) {
      updateMessage(botMessageId, 'Desculpe, ocorreu um erro. Tente novamente.', false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStop = () => {
    setIsLoading(false);
    // Remove mensagem de digitação se existir
    setMessages(prev => prev.filter(msg => !msg.isTyping));
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <MessageList messages={messages} />
      </div>
      
      <div className="chat-input">
        <MessageInput 
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          onStop={handleStop}
        />
      </div>
    </div>
  );
};