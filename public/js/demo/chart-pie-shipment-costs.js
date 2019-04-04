// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("shipmentCosts");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Fuel", "Insurance", "Wages-Driver", "Wages-Labourer"],
        datasets: [{
            data: [10, 12, 18, 60],
            backgroundColor: ['#ce8585', '#1cc88a', '#36b9cc', '#4e73df'],
            hoverBackgroundColor: ['#ce8585', '#17a673', '#2c9faf', '#2e59d9'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },
});
