import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import BarChart from "../components/BarChart";
import Typography from "@mui/material/Typography";
import LineChart from "../components/LineChart";
import MonthlyBalance from "../components/shared/MonthlyBalance";
import IncomeExpenseSummary from "../components/shared/IncomeExpenseSummary";
import MonthlyBalanceSummary from "../components/shared/MonthlyBalanceSummary";
import ProgressBar from "../components/ProgressBar";
import Transactions from "../components/Transactions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Dasboard() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}>
        <Grid item xs={4}>
          <Item>
            <Typography
              sx={{ textAlign: "left", fontWeight: "600" }}
              variant="h5"
              noWrap
              component="div">
              SUMMARY
            </Typography>
            <MonthlyBalanceSummary />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <MonthlyBalance title={"THIS MONTH"} />
        </Grid>
        <Grid item xs={4}>
          <MonthlyBalance title={"LAST MONTH"} />
        </Grid>

        <Grid gap={10} item xs={6}>
          <Item>
            <Typography
              sx={{ textAlign: "left", fontWeight: "600" }}
              variant="h5"
              noWrap
              component="div">
              Lasy 7 Days
            </Typography>
            <BarChart />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography
              sx={{ textAlign: "left", fontWeight: "600" }}
              variant="h5"
              noWrap
              component="div">
              Balance
            </Typography>
            <LineChart />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography
              sx={{ textAlign: "left", fontWeight: "600" }}
              variant="h5"
              noWrap
              component="div">
              Budget
            </Typography>
            <ProgressBar />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Transactions />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
