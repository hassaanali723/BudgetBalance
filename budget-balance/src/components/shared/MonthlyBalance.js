import React from "react";
import DoughnutChart from "../../components/DoughnutChart";
import IncomeExpenseSummary from "./IncomeExpenseSummary";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MonthlyBalance = ({ title }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}>
        <Item
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: "0 0 100%",
          }}>
          <Item sx={{ boxShadow: "none" }}>
            <DoughnutChart />
          </Item>
          <Item sx={{ boxShadow: "none" }}>
            <Typography
              sx={{ textAlign: "left", fontWeight: "600" }}
              variant="h5"
              noWrap
              component="div">
              {title}
            </Typography>
            <IncomeExpenseSummary />
          </Item>
        </Item>
      </Box>
    </div>
  );
};

export default MonthlyBalance;
