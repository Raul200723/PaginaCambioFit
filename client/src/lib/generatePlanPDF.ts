/*
 * Generador de PDFs para planes de dieta
 * Crea un PDF descargable con el plan completo
 */

export interface DietPlan {
  name: string;
  subtitle: string;
  kcal: string;
  protein: string;
  carbs: string;
  fat: string;
  weeks: string;
  level: string;
  features: string[];
}

export const generateDietPlanPDF = async (plan: DietPlan) => {
  try {
    // Crear contenido HTML del PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${plan.name} - CambioFit</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
          .container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
          .header { 
            background: linear-gradient(135deg, #FF6B35 0%, #FF3B5C 100%);
            color: white;
            padding: 40px;
            border-radius: 10px;
            margin-bottom: 40px;
            text-align: center;
          }
          .header h1 { font-size: 32px; margin-bottom: 10px; }
          .header p { font-size: 16px; opacity: 0.9; }
          .section { margin-bottom: 40px; }
          .section h2 { 
            color: #FF6B35;
            font-size: 24px;
            margin-bottom: 20px;
            border-bottom: 3px solid #FF6B35;
            padding-bottom: 10px;
          }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
          .card { 
            background: #f5f5f5;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #FF6B35;
          }
          .card strong { display: block; color: #FF6B35; margin-bottom: 5px; }
          .card span { font-size: 18px; font-weight: bold; }
          .features { list-style: none; }
          .features li { 
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            padding-left: 25px;
            position: relative;
          }
          .features li:before { 
            content: "✓";
            position: absolute;
            left: 0;
            color: #4CAF50;
            font-weight: bold;
          }
          .footer { 
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #eee;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
          .table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          .table th, .table td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
          .table th { background: #FF6B35; color: white; }
          .table tr:nth-child(even) { background: #f9f9f9; }
          .highlight { background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${plan.name}</h1>
            <p>${plan.subtitle}</p>
          </div>

          <div class="section">
            <h2>📊 Información del Plan</h2>
            <div class="grid">
              <div class="card">
                <strong>Calorías Diarias</strong>
                <span>${plan.kcal}</span>
              </div>
              <div class="card">
                <strong>Duración</strong>
                <span>${plan.weeks}</span>
              </div>
              <div class="card">
                <strong>Proteína</strong>
                <span>${plan.protein}</span>
              </div>
              <div class="card">
                <strong>Carbohidratos</strong>
                <span>${plan.carbs}</span>
              </div>
              <div class="card">
                <strong>Grasas</strong>
                <span>${plan.fat}</span>
              </div>
              <div class="card">
                <strong>Nivel</strong>
                <span>${plan.level}</span>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>✨ Lo que incluye este plan</h2>
            <ul class="features">
              ${plan.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>

          <div class="section">
            <h2>🎯 Cómo usar este plan</h2>
            <ol style="padding-left: 20px;">
              <li style="margin-bottom: 10px;"><strong>Semana 1:</strong> Familiarízate con los alimentos permitidos y prepara tus comidas.</li>
              <li style="margin-bottom: 10px;"><strong>Semanas 2-3:</strong> Mantén consistencia y ajusta porciones según tu hambre.</li>
              <li style="margin-bottom: 10px;"><strong>Semana 4+:</strong> Observa cambios y celebra tu progreso.</li>
            </ol>
          </div>

          <div class="highlight">
            <strong>💡 Consejo importante:</strong> Este plan es una guía general. Para resultados óptimos, combina con ejercicio regular y mantén hidratación adecuada. Si tienes restricciones dietéticas, consulta con un nutricionista.
          </div>

          <div class="section">
            <h2>📋 Ejemplo de Día Típico</h2>
            <table class="table">
              <tr>
                <th>Comida</th>
                <th>Ejemplo</th>
                <th>Calorías</th>
              </tr>
              <tr>
                <td>Desayuno</td>
                <td>Avena con frutas y proteína</td>
                <td>350 kcal</td>
              </tr>
              <tr>
                <td>Snack</td>
                <td>Yogur griego con almendras</td>
                <td>150 kcal</td>
              </tr>
              <tr>
                <td>Almuerzo</td>
                <td>Pollo con arroz integral y verduras</td>
                <td>450 kcal</td>
              </tr>
              <tr>
                <td>Snack</td>
                <td>Manzana con mantequilla de maní</td>
                <td>200 kcal</td>
              </tr>
              <tr>
                <td>Cena</td>
                <td>Salmón con batata y brócoli</td>
                <td>420 kcal</td>
              </tr>
            </table>
          </div>

          <div class="footer">
            <p>Plan generado por CambioFit - Tu Transformación Física Comienza Aquí</p>
            <p>Fecha: ${new Date().toLocaleDateString('es-ES')}</p>
            <p>© 2026 CambioFit. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Crear blob del PDF usando html2canvas + jsPDF (alternativa: usar una librería más simple)
    // Por ahora, crearemos un PDF simple usando la API de navegador
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    
    // Crear iframe invisible para imprimir a PDF
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    document.body.appendChild(iframe);

    iframe.onload = () => {
      iframe.contentWindow?.print();
      setTimeout(() => {
        document.body.removeChild(iframe);
        window.URL.revokeObjectURL(url);
      }, 100);
    };

  } catch (error) {
    console.error('Error generando PDF:', error);
    throw error;
  }
};

// Alternativa: generar descarga como archivo de texto/HTML
export const downloadPlanAsHTML = (plan: DietPlan) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${plan.name} - CambioFit</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
        .header { 
          background: linear-gradient(135deg, #FF6B35 0%, #FF3B5C 100%);
          color: white;
          padding: 40px;
          border-radius: 10px;
          margin-bottom: 40px;
          text-align: center;
        }
        .header h1 { font-size: 32px; margin-bottom: 10px; }
        .header p { font-size: 16px; opacity: 0.9; }
        .section { margin-bottom: 40px; }
        .section h2 { 
          color: #FF6B35;
          font-size: 24px;
          margin-bottom: 20px;
          border-bottom: 3px solid #FF6B35;
          padding-bottom: 10px;
        }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .card { 
          background: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #FF6B35;
        }
        .card strong { display: block; color: #FF6B35; margin-bottom: 5px; }
        .card span { font-size: 18px; font-weight: bold; }
        .features { list-style: none; }
        .features li { 
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          padding-left: 25px;
          position: relative;
        }
        .features li:before { 
          content: "✓";
          position: absolute;
          left: 0;
          color: #4CAF50;
          font-weight: bold;
        }
        .footer { 
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #eee;
          text-align: center;
          color: #666;
          font-size: 12px;
        }
        .table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .table th, .table td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        .table th { background: #FF6B35; color: white; }
        .table tr:nth-child(even) { background: #f9f9f9; }
        .highlight { background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${plan.name}</h1>
          <p>${plan.subtitle}</p>
        </div>

        <div class="section">
          <h2>📊 Información del Plan</h2>
          <div class="grid">
            <div class="card">
              <strong>Calorías Diarias</strong>
              <span>${plan.kcal}</span>
            </div>
            <div class="card">
              <strong>Duración</strong>
              <span>${plan.weeks}</span>
            </div>
            <div class="card">
              <strong>Proteína</strong>
              <span>${plan.protein}</span>
            </div>
            <div class="card">
              <strong>Carbohidratos</strong>
              <span>${plan.carbs}</span>
            </div>
            <div class="card">
              <strong>Grasas</strong>
              <span>${plan.fat}</span>
            </div>
            <div class="card">
              <strong>Nivel</strong>
              <span>${plan.level}</span>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>✨ Lo que incluye este plan</h2>
          <ul class="features">
            ${plan.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h2>🎯 Cómo usar este plan</h2>
          <ol style="padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>Semana 1:</strong> Familiarízate con los alimentos permitidos y prepara tus comidas.</li>
            <li style="margin-bottom: 10px;"><strong>Semanas 2-3:</strong> Mantén consistencia y ajusta porciones según tu hambre.</li>
            <li style="margin-bottom: 10px;"><strong>Semana 4+:</strong> Observa cambios y celebra tu progreso.</li>
          </ol>
        </div>

        <div class="highlight">
          <strong>💡 Consejo importante:</strong> Este plan es una guía general. Para resultados óptimos, combina con ejercicio regular y mantén hidratación adecuada. Si tienes restricciones dietéticas, consulta con un nutricionista.
        </div>

        <div class="section">
          <h2>📋 Ejemplo de Día Típico</h2>
          <table class="table">
            <tr>
              <th>Comida</th>
              <th>Ejemplo</th>
              <th>Calorías</th>
            </tr>
            <tr>
              <td>Desayuno</td>
              <td>Avena con frutas y proteína</td>
              <td>350 kcal</td>
            </tr>
            <tr>
              <td>Snack</td>
              <td>Yogur griego con almendras</td>
              <td>150 kcal</td>
            </tr>
            <tr>
              <td>Almuerzo</td>
              <td>Pollo con arroz integral y verduras</td>
              <td>450 kcal</td>
            </tr>
            <tr>
              <td>Snack</td>
              <td>Manzana con mantequilla de maní</td>
              <td>200 kcal</td>
            </tr>
            <tr>
              <td>Cena</td>
              <td>Salmón con batata y brócoli</td>
              <td>420 kcal</td>
            </tr>
          </table>
        </div>

        <div class="footer">
          <p>Plan generado por CambioFit - Tu Transformación Física Comienza Aquí</p>
          <p>Fecha: ${new Date().toLocaleDateString('es-ES')}</p>
          <p>© 2026 CambioFit. Todos los derechos reservados.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `${plan.name.replace(/\s+/g, '_')}_CambioFit.html`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
