function drawViz(data) {
    document.body.innerHTML = '';
    
    const vizContainer = document.createElement('div');
    vizContainer.className = 'viz-container';

    const textElement = document.createElement('p');
    textElement.textContent = 'Hola, Looker Studio!';
    textElement.className = 'main-text';

    vizContainer.appendChild(textElement);
    document.body.appendChild(vizContainer);
}

dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
