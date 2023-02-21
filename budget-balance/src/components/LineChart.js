import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Expense",
          data: [2000, 2100, 1900, 2300, 3000, 2500, 2200],
          borderColor: "#f44336",
          backgroundColor: "#f44336",
        },
        {
          label: "Credit",
          data: [1800, 1900, 2200, 2100, 2600, 2800, 2200],
          borderColor: "#43a047",
          backgroundColor: "#43a047",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    });
  }, []);
  return (
    <div>
      <Line options={chartOptions} data={chartData} />
    </div>
  );
};

export default LineChart;
