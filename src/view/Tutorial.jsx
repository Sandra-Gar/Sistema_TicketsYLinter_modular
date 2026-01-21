/**
 * Componente Tutorial
 * Sección de educación sobre auditoría y mantenimiento
 */

import React from 'react';
import { Code, LayoutDashboard } from 'lucide-react';

const Tutorial = () => {
  const maintenanceTypes = [
    { name: 'Correctivo', color: 'bg-red-100', textColor: 'text-red-700' },
    { name: 'Adaptativo', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Perfectivo', color: 'bg-purple-100', textColor: 'text-purple-700' },
    { name: 'Preventivo', color: 'bg-amber-100', textColor: 'text-amber-700' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Tutorial de Implementación</h1>
        <p className="text-slate-500 text-lg">Aprendiendo a auditar y mantener software profesionalmente.</p>
      </header>

      {/* Sección 1: Auditoría */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-4 text-blue-600">
          <Code size={24} />
          <h2 className="text-2xl font-bold">1. ¿Cómo funciona la Auditoría de Código?</h2>
        </div>
        <p className="text-slate-600 mb-4 leading-relaxed">
          La auditoría estática de código consiste en analizar el código fuente sin ejecutarlo. Se buscan patrones que violen las "reglas de negocio" o "estándares de la industria".
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-slate-50 p-4 rounded-lg border border-slate-100 italic">
            "El auditor no es un enemigo, es el primer filtro de calidad antes de producción."
          </li>
          <li className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <strong>Regla de Oro:</strong> Automatiza lo que puedas, revisa manualmente lo lógico.
          </li>
        </ul>
      </section>

      {/* Sección 2: Ciclo de Vida */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-4 text-emerald-600">
          <LayoutDashboard size={24} />
          <h2 className="text-2xl font-bold">2. El Ciclo de Vida del Mantenimiento</h2>
        </div>
        <p className="text-slate-600 mb-6">
          Para gestionar el mantenimiento eficazmente, cada solicitud debe ser categorizada y priorizada. No es lo mismo un error que impide cobrar (Correctivo Crítico) que una mejora estética (Perfectivo Baja).
        </p>
        <div className="flex flex-wrap gap-2">
          {maintenanceTypes.map(type => (
            <span
              key={type.name}
              className={`px-3 py-1 ${type.color} ${type.textColor} rounded-full text-sm font-semibold`}
            >
              {type.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tutorial;
