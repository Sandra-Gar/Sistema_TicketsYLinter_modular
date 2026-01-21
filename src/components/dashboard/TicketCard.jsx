//Tarjeta individual de ticket
import React from 'react';
import { AlertCircle, Settings, CheckCircle2, Trash2 } from 'lucide-react';

const getTypeStyles = (type) => {
  const styles = {
    'Correctivo': { bg: 'bg-red-50', text: 'text-red-600', icon: AlertCircle },
    'Adaptativo': { bg: 'bg-blue-50', text: 'text-blue-600', icon: Settings },
    'Perfectivo': { bg: 'bg-purple-50', text: 'text-purple-600', icon: Settings },
    'Preventivo': { bg: 'bg-amber-50', text: 'text-amber-600', icon: Settings }
  };
  return styles[type] || styles['Correctivo'];
};

const TicketCard = ({ ticket, onToggleStatus, onDelete }) => {
  const typeStyles = getTypeStyles(ticket.type);
  const Icon = typeStyles.icon;
  const isResolved = ticket.status === 'Resuelto';

  return (
    <div
      className={`group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
        isResolved ? 'opacity-60 grayscale' : ''
      }`}
    >
      {/* Contenido */}
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-full ${typeStyles.bg} ${typeStyles.text}`}>
          <Icon size={24} />
        </div>
        <div>
          <h4
            className={`font-bold text-lg ${
              isResolved ? 'line-through text-slate-400' : ''
            }`}
          >
            {ticket.title}
          </h4>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="font-medium">{ticket.type}</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>{ticket.date}</span>
          </div>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggleStatus(ticket.id)}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
            isResolved
              ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
          }`}
        >
          <CheckCircle2 size={18} />
          {isResolved ? 'Reabrir' : 'Resolver'}
        </button>
        <button
          onClick={() => onDelete(ticket.id)}
          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
