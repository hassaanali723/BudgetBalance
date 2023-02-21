import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri"],
      datasets: [
        {
          label: "Expense",
          data: [100, 75, 30, 50, 20, 25, 70],
          borderColor: "#f44336",
          backgroundColor: "#f44336",
        },
        {
          label: "Credit",
          data: [10, 65, 0, 20],
          borderColor: "rgb(53, 162, 235)",
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
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
};

export default BarChart;
