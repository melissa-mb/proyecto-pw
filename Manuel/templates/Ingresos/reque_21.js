// Script que genera un gráfico de barras con Chart.js
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('earningsChart').getContext('2d');

  const earningsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      datasets: [{
        label: 'Ganancias ($)',
        data: [11000, 7500, 7800, 11500, 11600, 8300, 8200, 10100, 8200, 8100, 9900, 7900],
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        borderColor: 'rgba(100, 100, 100, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
