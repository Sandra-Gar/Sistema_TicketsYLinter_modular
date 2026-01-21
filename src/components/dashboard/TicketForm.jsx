/**
 * Componente TicketForm
 * Formulario para crear nuevos tickets
 */

import React from 'react';
import { PlusCircle } from 'lucide-react';

const TICKET_TYPES = ['Correctivo', 'Adaptativo', 'Perfectivo', 'Preventivo'];

const TicketForm = ({ ticketData, onChange, onSubmit }) => {
  const handleChange = (field, value) => {
    onChange({ ...ticketData, [field]: value });
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      {/* Descripción */}
      <div className="md:col-span-2 space-y-2">
        <label className="text-sm font-bold text-slate-600">
          Descripción del Cambio / Error
        </label>
        <input
          type="text"
          placeholder="Ej: Error 404 al loguearse..."
          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          value={ticketData.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
      </div>

      {/* Tipo */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-600">Tipo</label>
        <select
          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
          value={ticketData.type}
          onChange={(e) => handleChange('type', e.target.value)}
        >
          {TICKET_TYPES.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Botón */}
      <button
        onClick={onSubmit}
        disabled={!ticketData.title}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white h-[50px] rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-100"
      >
        <PlusCircle size={20} /> Crear Ticket
      </button>
    </div>
  );
};

export default TicketForm;
