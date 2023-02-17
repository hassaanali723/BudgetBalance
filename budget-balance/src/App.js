import React from "react";
import { Routes, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

import "./App.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import Signup from "./pages/authentication/singup/signup";
import Login from "./pages/authentication/login/Login";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import Layout from "./components/shared/layout";
import Savings from "./pages/Savings";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="accounts"
              element={
                <ProtectedRoute>
                  <Accounts />
                </ProtectedRoute>
              }
            />
            <Route
              path="savings"
              element={
                <ProtectedRoute>
                  <Savings />
                </ProtectedRoute>
              }
            />
            <Route
              path="transactions"
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />
            <Route
              path="budget"
              element={
                <ProtectedRoute>
                  <Budget />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
