import React, { useState } from 'react';
import {
  Sidebar,
  Tutorial,
  AuditTool,
  Dashboard,
  Footer
} from './components';

const App = () => {
  const [activeTab, setActiveTab] = useState('tutorial');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="md:ml-64 p-4 md:p-10">
        {activeTab === 'tutorial' && <Tutorial />}
        {activeTab === 'auditoria' && <AuditTool />}
        {activeTab === 'dashboard' && <Dashboard />}
      </main>

      <Footer/>
    </div>
  );
}

export default App;