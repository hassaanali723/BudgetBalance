import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createCategory, getCategories } from "../api/categories";
import { useQuery, useMutation } from "react-query";
import { useEffect, useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Grid from "@mui/material/Grid";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Stack from "@mui/material/Stack";
import PaidIcon from "@mui/icons-material/Paid";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ListItem = ({ subCategory, title, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
      {subCategory && (
        <Box sx={{ margin: "30px 20px" }} className="border">
          <RadioButtonCheckedIcon />
        </Box>
      )}
      <Box component="img" src={image} />
      <Typography sx={{ marginLeft: "10px" }}>{title}</Typography>
    </Box>
  );
};

const CategoryList = ({ data }) => {
  return (
    <Box>
      {data.map((category) => (
        <Accordion key={category.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <ListItem title={category.title} image={category.imageUrl} />
          </AccordionSummary>
          {category.subCategory ? (
            <AccordionDetails>
              {category.subCategory.map((subCategory) => (
                <ListItem
                  key={subCategory.id}
                  subCategory="true"
                  title={subCategory.title}
                  image={subCategory.imageURL}
                />
              ))}
            </AccordionDetails>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "40px",
                }}
                className="border">
                <RadioButtonCheckedIcon />
                <AccordionDetails>No Item</AccordionDetails>
              </Box>
            </>
          )}
        </Accordion>
      ))}
    </Box>
  );
};

const NewMainCategoryForm = () => {
  const [mainCategoryName, setMainCategoryName] = useState("");

  const {
    categoriesData,
    isCategoryAdding,
    postError,
    mutate: addCategory,
  } = useMutation("addCategory", createCategory, {
    onSuccess: (categoriesData) => {
      console.log(categoriesData);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: mainCategoryName,
      imageUrl:
        "https://webapp.fastbudget.app/static/icons/ic_base_incomes.svg",
      type: "Income",
      subCategory: null,
    };
    const postCategoryData = data;
    addCategory(postCategoryData);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <Typography
        sx={{ textAlign: "left", fontWeight: "600" }}
        variant="h5"
        noWrap
        component="div">
        Main Catergory Add
      </Typography>
      <TextValidator
        label="Cateogry Name"
        placeholder="Enter Cateogry Name"
        type="text"
        fullWidth
        required
        value={mainCategoryName}
        validators={["required"]}
        errorMessages={["this field is required"]}
        onChange={(e) => {
          setMainCategoryName(e.target.value);
        }}
      />

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        justifyContent="left">
        <Button variant="outlined" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label">
          <input hidden accept="image/*" type="file" />
          <AddAPhotoIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ justifyContent: "center" }}>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            padding: "6px 40px",
            borderRadius: 30,
            "&.Mui-disabled": {
              bgcolor: "#7fbfff",
              color: "white",
            },
          }}>
          Save
        </Button>
      </Stack>
      {/* disabled={!email || !password} */}
    </ValidatorForm>
  );
};

const NewSubCategoryForm = () => {
  const [subCategoryName, setSubCategoryName] = useState("");
  const [parentCategory, setparentCategory] = useState("");

  const handleSubmit = () => {};

  const handleChange = (event) => {
    setparentCategory(event.target.value);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <Typography
        sx={{ textAlign: "left", fontWeight: "600" }}
        variant="h5"
        noWrap
        component="div">
        Sub Catergory Add
      </Typography>
      <TextValidator
        label="Sub Cateogry Name"
        placeholder="Enter Sub Cateogry Name"
        type="text"
        fullWidth
        required
        value={subCategoryName}
        validators={["required"]}
        errorMessages={["this field is required"]}
        onChange={(e) => {
          setSubCategoryName(e.target.value);
        }}
      />

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Parent Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={parentCategory}
          label="Parent Category"
          onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Financial Income</MenuItem>
          <MenuItem value={20}>Income</MenuItem>
          <MenuItem value={30}>Savings</MenuItem>
        </Select>
      </FormControl>

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        justifyContent="left">
        <Button variant="outlined" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label">
          <input hidden accept="image/*" type="file" />
          <AddAPhotoIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ justifyContent: "center" }}>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            padding: "6px 40px",
            borderRadius: 30,
            "&.Mui-disabled": {
              bgcolor: "#7fbfff",
              color: "white",
            },
          }}>
          Save
        </Button>
      </Stack>
      {/* disabled={!email || !password} */}
    </ValidatorForm>
  );
};

const CategoryManagement = () => {
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [formTabValue, setFormTabValue] = React.useState("1");
  const [categoriesTabValue, setCategoriesTabValue] = React.useState("1");
  const [value, setValue] = React.useState("1");

  const { data, isLoading, isError, error } = useQuery(
    "categories",
    getCategories
  );

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const income = data.filter((category) => category.type === "Income");
      const expense = data.filter((category) => category.type === "Expense");
      setIncomeCategories(income);
      setExpenseCategories(expense);
    }
  }, [isLoading, isError, data]);

  const handleChange = (event, newValue) => {
    setFormTabValue(newValue);
  };
  const handleCategoryChange = (event, newValue) => {
    setCategoriesTabValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <TabContext value={formTabValue}>
          <Tabs value={formTabValue} onChange={handleChange} centered>
            <Tab label="Income" value="1" />
            <Tab label="Expense" value="2" />
          </Tabs>
          <TabPanel value="1">
            <Box>
              <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={6}>
                  <Item>
                    <NewMainCategoryForm />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <NewSubCategoryForm />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box>
              <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={6}>
                  <Item>
                    <NewMainCategoryForm />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <NewSubCategoryForm />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
      <Box sx={{ marginTop: "10px" }}></Box>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <TabContext value={categoriesTabValue}>
          <Tabs
            value={categoriesTabValue}
            onChange={handleCategoryChange}
            centered>
            <Tab label="Income" value="1" />
            <Tab label="Expense" value="2" />
          </Tabs>
          <TabPanel value="1">
            <CategoryList data={incomeCategories} />
          </TabPanel>
          <TabPanel value="2">
            <CategoryList data={expenseCategories} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default CategoryManagement;
