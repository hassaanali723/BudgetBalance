import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center" p={3}>
      <Box width="100%" mr={3}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            height: "10px",
            borderRadius: "5px",
            backgroundColor: "#dbdbdb",
            "& .MuiLinearProgress-bar1Determinate": {
              backgroundColor: "rgb(76, 175, 80)",
            },
          }}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const ProgressBar = () => {
  const [bar, setBar] = useState(70);
  return (
    <Box>
      <Typography
        variant="p"
        noWrap
        component="div"
        sx={{
          color: "rgb(0, 0, 0);",
          fontSize: "1.3rem",
          fontWeight: 400,
          textAlign: "left",
          marginTop: "10px",
        }}>
        Entertainment
      </Typography>
      <LinearProgressWithLabel value={60} />

      <Typography
        variant="p"
        noWrap
        component="div"
        sx={{
          color: "rgb(0, 0, 0);",
          fontSize: "1.3rem",
          fontWeight: 400,
          textAlign: "left",
          marginTop: "10px",
        }}>
        Eating Out
      </Typography>
      <LinearProgressWithLabel value={50} />

      <Typography
        variant="p"
        noWrap
        component="div"
        sx={{
          color: "rgb(0, 0, 0);",
          fontSize: "1.3rem",
          fontWeight: 400,
          textAlign: "left",
          marginTop: "10px",
        }}>
        Bills
      </Typography>
      <LinearProgressWithLabel value={90} />
    </Box>
  );
};

export default ProgressBar;
