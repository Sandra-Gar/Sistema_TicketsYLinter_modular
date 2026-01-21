/**
 * Servicio de Auditoría de Código
 * Contiene la lógica para analizar código y detectar problemas de calidad/seguridad
 */

const AUDIT_RULES = [
  {
    id: 'deprecated-var',
    pattern: /var\s+/,
    severity: 'Baja',
    message: 'Uso de "var" detectado. Se recomienda usar "let" o "const" para evitar problemas de scope.'
  },
  {
    id: 'alert-usage',
    pattern: /alert\(/,
    severity: 'Media',
    message: 'Uso de "alert()" detectado. Bloquea el hilo principal; usa modales personalizados.'
  },
  {
    id: 'weak-comparison',
    pattern: /\s==\s/,
    severity: 'Media',
    message: 'Comparación débil (==). Usa comparación estricta (===) para evitar coerción de tipos.'
  },
  {
    id: 'empty-function',
    pattern: /function.*\{\s*\}/,
    severity: 'Baja',
    message: 'Función vacía detectada. Elimina código muerto para mejorar la mantenibilidad.'
  }
];

/**
 * Ejecuta auditoría de código
 * @param {string} code - Código a auditar
 * @returns {Array} Array de hallazgos encontrados
 */
export const runCodeAudit = (code) => {
  const findings = [];
  const lines = code.split('\n');

  lines.forEach((line, index) => {
    AUDIT_RULES.forEach(rule => {
      if (rule.pattern.test(line)) {
        findings.push({
          line: index + 1,
          msg: rule.message,
          severity: rule.severity,
          ruleId: rule.id
        });
      }
    });
  });

  return findings;
};

/**
 * Obtiene el código inicial de ejemplo
 * @returns {string} Código de ejemplo
 */
export const getInitialCode = () => {
  return `// Pega tu código aquí
var x = 10;
function test(){
  if(x == 10){
    alert("Error");
  }
}`;
};
