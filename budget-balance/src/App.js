import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Savings from "./pages/Savings";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import Layout from "./components/shared/layout";
import { BrowserRouter } from "react-router-dom";
import Signup from "./pages/authentication/singup/signup";
import Login from "./pages/authentication/login/Login";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
