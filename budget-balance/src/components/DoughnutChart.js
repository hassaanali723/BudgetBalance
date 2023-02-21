import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const option = {
    maintainAspectRatio: false,
    plugins: {
      legend: false, // Hide legend
    },
  };

  useEffect(() => {
    setChartData({
      labels: ["Expense", "Income"],
      datasets: [
        {
          label: "%",
          data: [12, 19],
          backgroundColor: ["#f44336", "#43a047"],
          borderColor: ["#f44336", "#43a047"],
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <Doughnut width={142} height={156} data={chartData} options={option} />
  );
};

export default DoughnutChart;
