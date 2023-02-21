import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const IncomeExpenseSummary = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          columns={{ xs: 6 }}>
          <Typography variant="p" noWrap component="div">
            <KeyboardArrowUpIcon
              sx={{
                color: "rgb(76, 175, 80);",
                fontSize: "2.2rem",
                fontWeight: 600,
              }}
            />
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
            $1,452.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          columns={{ xs: 6 }}>
          <Typography variant="p" noWrap component="div">
            <KeyboardArrowDownIcon
              sx={{
                color: "rgb(244, 67, 54);;",
                fontSize: "2.2rem",
                fontWeight: 600,
              }}
            />
          </Typography>
          <Typography
            sx={{
              color: "rgb(244, 67, 54););",
              fontSize: "1.3rem",
              fontWeight: 600,
            }}
            variant="p"
            noWrap
            component="div">
            -$565.53
          </Typography>
        </Box>
        <hr />
        <Typography
          sx={{ fontSize: "1.3rem", fontWeight: 600, textAlign: "right" }}
          variant="p"
          noWrap
          component="div">
          $886.47
        </Typography>
      </Box>
    </div>
  );
};

export default IncomeExpenseSummary;
