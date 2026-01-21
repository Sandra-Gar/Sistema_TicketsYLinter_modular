/**
 * Componente TicketList
 * Lista de tickets con estadísticas
 */

import React from 'react';
import TicketCard from './TicketCard';

const TicketList = ({ tickets, onToggleStatus, onDelete }) => {
  const openCount = tickets.filter(t => t.status === 'Abierto').length;

  return (
    <div className="space-y-6">
      {/* Header con estadísticas */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Gestión de Mantenimiento</h2>
          <p className="text-slate-500">Control de deuda técnica y evolutivos.</p>
        </div>
        <div className="flex gap-4 text-center">
          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">Total</p>
            <p className="text-xl font-bold">{tickets.length}</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">Abiertos</p>
            <p className="text-xl font-bold text-blue-600">{openCount}</p>
          </div>
        </div>
      </div>

      {/* Lista de tickets */}
      <div className="grid grid-cols-1 gap-4">
        {tickets.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl py-20 text-center text-slate-400">
            El backlog está vacío. ¡Buen trabajo!
          </div>
        ) : (
          tickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onToggleStatus={onToggleStatus}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TicketList;
