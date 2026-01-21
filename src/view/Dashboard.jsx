/**
 * Componente Dashboard
 * Gestión de mantenimiento y tickets
 */

import React, { useState, useEffect } from 'react';
import TicketForm from '../components/dashboard/TicketForm';
import TicketList from '../components/dashboard/TicketList';
import {
  loadTickets,
  createTicket,
  deleteTicket,
  toggleTicketStatus,
  getInitialTicket
} from '../services/ticketService';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState(getInitialTicket());
  const [loading, setLoading] = useState(true);

  // Cargar tickets al montar el componente
  useEffect(() => {
    const initializeTickets = async () => {
      try {
        const loadedTickets = await loadTickets();
        setTickets(loadedTickets);
      } catch (error) {
        console.error('Error al cargar tickets:', error);
      } finally {
        setLoading(false);
      }
    };
    initializeTickets();
  }, []);

  // Crear nuevo ticket
  const handleAddTicket = async () => {
    if (!newTicket.title) return;
    try {
      const createdTicket = await createTicket(newTicket);
      setTickets([createdTicket, ...tickets]);
      setNewTicket(getInitialTicket());
    } catch (error) {
      console.error('Error al crear ticket:', error);
    }
  };

  // Eliminar ticket
  const handleDeleteTicket = async (id) => {
    try {
      await deleteTicket(id);
      setTickets(tickets.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error al eliminar ticket:', error);
    }
  };

  // Cambiar estado del ticket
  const handleToggleStatus = async (id) => {
    try {
      const ticket = tickets.find(t => t.id === id);
      const newStatus = await toggleTicketStatus(id, ticket.status);
      setTickets(
        tickets.map(t =>
          t.id === id ? { ...t, status: newStatus } : t
        )
      );
    } catch (error) {
      console.error('Error al actualizar estado:', error);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-slate-400">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4">Cargando tickets...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <TicketForm
        ticketData={newTicket}
        onChange={setNewTicket}
        onSubmit={handleAddTicket}
      />
      <TicketList
        tickets={tickets}
        onToggleStatus={handleToggleStatus}
        onDelete={handleDeleteTicket}
      />
    </div>
  );
};

export default Dashboard;
