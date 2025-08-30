import React from 'react';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { ChatContainer } from './components/Chat/ChatContainer';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <ChatContainer />
        </main>
      </div>
    </div>
  );
}

export default App;