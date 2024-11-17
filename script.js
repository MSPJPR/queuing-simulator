document.getElementById('simulate').addEventListener('click', () => {
    const arrivalRate = parseFloat(document.getElementById('arrivalRate').value);
    const serviceRate = parseFloat(document.getElementById('serviceRate').value);
    const servers = parseInt(document.getElementById('servers').value);

    if (!arrivalRate || !serviceRate || !servers) {
        alert('Please fill all the fields with valid values!');
        return;
    }

    const rho = arrivalRate / (serviceRate * servers);
    const utilization = rho * 100;

    const resultsDiv = document.getElementById('output');
    resultsDiv.innerHTML = `
        <p>Utilization (ρ): ${utilization.toFixed(2)}%</p>
        <p>Average Waiting Time (Wq): ${(rho / (1 - rho)).toFixed(2)} units</p>
        <p>Average Queue Length (Lq): ${(rho * rho / (1 - rho)).toFixed(2)} jobs</p>
    `;
});
