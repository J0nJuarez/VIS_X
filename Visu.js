// Importa la biblioteca helper de Looker Studio
import * as dscc from '@google/dscc';

function drawVisu(data) {
  // Limpiar el contenedor de la visualización
  document.body.innerHTML = '';

  // Crear un nuevo elemento div
  const viz = document.createElement('div');
  viz.innerHTML = 'Hola, Looker Studio!';
  viz.style.fontFamily = 'Arial, sans-serif';
  viz.style.backgroundColor = '#f2f2f2';
  viz.style.padding = '10px';

  // Añadir el elemento div al cuerpo del documento
  document.body.appendChild(viz);
}

// Suscribirse a los datos de Looker Studio
dscc.subscribeToData(drawVisu, {transform: dscc.objectTransform});
