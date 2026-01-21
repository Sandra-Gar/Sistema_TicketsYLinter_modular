/**
 * Servicio de Gestión de Tickets
 * Contiene la lógica para operar con tickets en Firebase (CRUD)
 */

import { db } from '../firebase/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const TICKETS_COLLECTION = 'tickets';

/**
 * Carga todos los tickets desde Firebase
 * @returns {Promise<Array>} Array de tickets
 */
export const loadTickets = async () => {
  try {
    const ticketsCollection = collection(db, TICKETS_COLLECTION);
    const snapshot = await getDocs(ticketsCollection);
    return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error('Error al cargar tickets:', error);
    throw error;
  }
};

/**
 * Crea un nuevo ticket en Firebase
 * @param {Object} ticketData - Datos del ticket (title, type, priority)
 * @returns {Promise<Object>} Ticket creado con ID
 */
export const createTicket = async (ticketData) => {
  try {
    const ticket = {
      ...ticketData,
      status: 'Abierto',
      date: new Date().toLocaleDateString()
    };
    const docRef = await addDoc(collection(db, TICKETS_COLLECTION), ticket);
    return { ...ticket, id: docRef.id };
  } catch (error) {
    console.error('Error al agregar ticket:', error);
    throw error;
  }
};

/**
 * Elimina un ticket de Firebase
 * @param {string} id - ID del ticket
 * @returns {Promise<void>}
 */
export const deleteTicket = async (id) => {
  try {
    await deleteDoc(doc(db, TICKETS_COLLECTION, id));
  } catch (error) {
    console.error('Error al eliminar ticket:', error);
    throw error;
  }
};

/**
 * Actualiza el estado de un ticket
 * @param {string} id - ID del ticket
 * @param {string} newStatus - Nuevo estado ('Abierto' o 'Resuelto')
 * @returns {Promise<string>} El nuevo estado
 */
export const toggleTicketStatus = async (id, currentStatus) => {
  try {
    const newStatus = currentStatus === 'Abierto' ? 'Resuelto' : 'Abierto';
    await updateDoc(doc(db, TICKETS_COLLECTION, id), { status: newStatus });
    return newStatus;
  } catch (error) {
    console.error('Error al actualizar estado:', error);
    throw error;
  }
};

/**
 * Obtiene el ticket inicial por defecto
 * @returns {Object} Ticket inicial
 */
export const getInitialTicket = () => {
  return { title: '', type: 'Correctivo', priority: 'Media' };
};
