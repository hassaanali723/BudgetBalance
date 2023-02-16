import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid gap={10} item xs={6}>
          <Item sx={{ height: "120px" }}>Transactions</Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ height: "120px" }}>Expenses</Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ height: "120px" }}>Lost Graph</Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ height: "120px" }}>Users</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
