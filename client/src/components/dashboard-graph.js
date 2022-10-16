import React, { Component, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)



export default function DashboardGraph() {
    const data = {
        labels: ["May", "June", "July", "August"],
        datasets: [
            {
                data: [1, 4, 2.5, 10, 10, 6, 10],
                backgroundColor: "#000000",
                borderColor: '#EA3A60',
                // pointBorderColor: '#2ABDF3',
                pointBorderWidth: 4,
                // hoverBorderColor : "#000",
                tension: 0.4
            }
        ]
    }

    const options = {
        plugin: {
            legend: false,
            autocolors: false,
        },
        scales: {
            x: {
                display: false
            },
            y: {
                ticks: {
                    // stepSize: 2,
                    callback: (value) => value
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };
    return (
    <div>
        <Line data={data} options={options}></Line>
    </div>
    )
}

