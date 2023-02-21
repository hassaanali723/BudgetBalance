import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PaidIcon from "@mui/icons-material/Paid";

const ListItem = ({ subCategory }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
      {subCategory && <Box sx={{ marginLeft: "20px" }}></Box>}
      <Box
        component="img"
        src="https://webapp.fastbudget.app/static/icons/ic_bank.svg"
      />
      <Typography sx={{ marginLeft: "10px" }}>Financial Income</Typography>
    </Box>
  );
};

const IncomeCategoryList = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <ListItem />
        </AccordionSummary>
        <AccordionDetails>
          <ListItem subCategory="true" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <ListItem />
        </AccordionSummary>
        <AccordionDetails>
          <ListItem subCategory="true" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <ListItem />
        </AccordionSummary>
        <AccordionDetails>
          <ListItem subCategory="true" />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default function CategoryManagement() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Income" value="1" />
          <Tab label="Expense" value="2" />
        </Tabs>
        <TabPanel value="1">
          <IncomeCategoryList />
        </TabPanel>
        <TabPanel value="2">
          <IncomeCategoryList />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
