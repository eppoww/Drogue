import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import gsap from 'gsap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DrugUsageChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      gsap.from(chartRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, []);

  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Drug Users (Millions)',
        data: [3.6, 4.2, 4.6, 6.0, 5.7], // Data for drug users in millions
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Drug Users in Indonesia (2019-2023)',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Users: ${tooltipItem.formattedValue} million`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Users (Millions)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
    animation: {
      duration: 0, // Disable Chart.js animation since we're using GSAP
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      <div className="relative h-80">
        <Line data={data} options={options} ref={chartRef} />
      </div>
    </div>
  );
}
