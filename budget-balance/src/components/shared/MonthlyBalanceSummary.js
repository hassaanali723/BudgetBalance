import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const MonthlyBalanceSummary = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "25px",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          columns={{ xs: 6 }}>
          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{
              color: "rgb(0, 0, 0);",
              fontSize: "1.3rem",
              fontWeight: 400,
            }}>
            Balance
          </Typography>
          <Typography
            sx={{
              color: "rgb(76, 175, 80);",
              fontSize: "1.3rem",
              fontWeight: 600,
            }}
            variant="h2"
            noWrap
            component="div">
            $13,627.71
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          columns={{ xs: 6 }}>
          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{
              color: "rgb(0, 0, 0);",
              fontSize: "1.3rem",
              fontWeight: 400,
            }}>
            Credit Cards
          </Typography>
          <Typography
            sx={{
              color: "rgb(244, 67, 54););",
              fontSize: "1.3rem",
              fontWeight: 600,
              marginBottom: "10px",
            }}
            variant="p"
            noWrap
            component="div">
            -$189.00
          </Typography>
        </Box>
        <hr />
        <Typography
          sx={{ fontSize: "1.3rem", fontWeight: 600, textAlign: "right" }}
          variant="p"
          noWrap
          component="div">
          $13,438.71
        </Typography>
      </Box>
    </div>
  );
};

export default MonthlyBalanceSummary;
