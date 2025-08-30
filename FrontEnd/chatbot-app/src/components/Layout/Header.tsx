import React from 'react';
import { MessageSquare, Settings, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <MessageSquare size={24} />
          <h1>TalkBot LLaMA AI</h1>
        </div>
        
        <div className="header-right">
          <button className="header-button" title="Configurações">
            <Settings size={20} />
          </button>
          <button className="header-button" title="Perfil">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};