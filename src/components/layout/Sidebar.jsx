//Componente Sidebar


import React from 'react';
import { Settings, BookOpen, ShieldCheck, LayoutDashboard } from 'lucide-react';

const Sidebar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'tutorial', label: 'Tutorial Teórico', icon: BookOpen },
    { id: 'auditoria', label: 'Herramienta Auditoría', icon: ShieldCheck },
    { id: 'dashboard', label: 'Gestión Mantenimiento', icon: LayoutDashboard }
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 p-6 hidden md:block">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <Settings className="text-blue-600 w-8 h-8" />
        <span className="font-bold text-xl tracking-tight">Sistemas V</span>
      </div>

      {/* Navigation Tabs */}
      <div className="space-y-2">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-blue-50 text-blue-700 shadow-sm'
                  : 'hover:bg-slate-100 text-slate-500'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
