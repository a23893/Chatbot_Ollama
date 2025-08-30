import React from 'react';
import { Plus, MessageSquare, Trash2 } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [chats] = React.useState([
    { id: '1', title: 'Nova conversa', date: 'Hoje' },
    { id: '2', title: 'Sobre programação', date: 'Ontem' },
    { id: '3', title: 'Dúvidas sobre React', date: '2 dias atrás' },
  ]);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <button className="new-chat-button">
          <Plus size={20} />
          New Chat
        </button>
      </div>
      
      <div className="chat-history">
        <h3>Recent Chats</h3>
        <div className="chat-list">
          {chats.map((chat) => (
            <div key={chat.id} className="chat-item">
              <div className="chat-item-content">
                <MessageSquare size={16} />
                <div className="chat-item-info">
                  <span className="chat-title">{chat.title}</span>
                  <span className="chat-date">{chat.date}</span>
                </div>
              </div>
              <button className="delete-chat" title="Excluir conversa">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};