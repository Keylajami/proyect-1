window.onload = () => {
    const tablaSuma = document.getElementById('tablaSuma');

    
    for (let i = 1; i <= 12; i++) {
    const fila = document.createElement('tr');
    const celdaNumero = document.createElement('td');
        celdaNumero.textContent = `10 + ${i}`;

        const celdaResultado = document.createElement('td');
        celdaResultado.textContent = 10 + i;

        fila.appendChild(celdaNumero);
        fila.appendChild(celdaResultado);

    tablaSuma.appendChild(fila);
    }
};