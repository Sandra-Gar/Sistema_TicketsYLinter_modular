//Componente AuditTool Herramienta interactiva de auditoría de código

import React, { useState } from 'react';
import { Search, CheckCircle2 } from 'lucide-react';
import { runCodeAudit, getInitialCode } from '../services/auditService';

const AuditTool = () => {
  const [codeToAudit, setCodeToAudit] = useState(getInitialCode());
  const [auditResults, setAuditResults] = useState([]);

  const handleRunAudit = () => {
    const findings = runCodeAudit(codeToAudit);
    setAuditResults(findings);
  };

  const getSeverityStyles = (severity) => {
    return severity === 'Media'
      ? 'bg-amber-50 border-amber-400'
      : 'bg-slate-50 border-slate-300';
  };

  const getSeverityTextColor = (severity) => {
    return severity === 'Media' ? 'text-amber-700' : 'text-slate-500';
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Linter Básico de Auditoría</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Código a analizar (JS/HTML)
          </label>
          <textarea
            className="w-full h-80 p-4 font-mono text-sm bg-slate-900 text-emerald-400 rounded-xl border border-slate-800 shadow-inner focus:ring-2 focus:ring-blue-500 outline-none"
            value={codeToAudit}
            onChange={(e) => setCodeToAudit(e.target.value)}
          />
          <button
            onClick={handleRunAudit}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Search size={20} /> Ejecutar Auditoría
          </button>
        </div>

        {/* Resultados */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold">Hallazgos de Seguridad/Calidad</h3>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {auditResults.length}
            </span>
          </div>
          <div className="p-4 space-y-3 overflow-y-auto max-h-[400px]">
            {auditResults.length === 0 ? (
              <div className="text-center py-20 text-slate-400">
                <CheckCircle2 className="mx-auto mb-2 opacity-20" size={48} />
                <p>No se encontraron problemas evidentes.</p>
              </div>
            ) : (
              auditResults.map((res, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg border-l-4 ${getSeverityStyles(res.severity)}`}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-bold uppercase text-slate-400">
                      Línea {res.line}
                    </span>
                    <span className={`text-xs font-bold ${getSeverityTextColor(res.severity)}`}>
                      {res.severity}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700">{res.msg}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditTool;
