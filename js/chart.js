'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

const state = new AppState();
state.loadItems();

function renderChart() {

    const ctx = canvasElem.getContext("2d");
    const productNames = state.allProducts.map(product => product.name);
    const productVotes = state.allProducts.map(product => product.timesClicked);
    const productShown = state.allProducts.map(product => product.timesShown);
    console.log(productNames);
    console.log(productVotes);
    console.log(productShown);


    
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productNames,
            datasets: [{
                label: 'clicks',
                data: productVotes,
                borderWidth: 1,
                backgroundColor: "#8bc2f6",
        
            },
            {
                label: 'views',
                data: productShown,
                borderWidth: 1,
                backgroundColor: "#83ea3a",
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "black"
                    }
                },
                x: {
                    ticks: {
                        color: "black"
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "black"
                    }
                }
            }
        }
    }
    );
}

renderChart();