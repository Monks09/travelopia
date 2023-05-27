import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Form from "../pages/Form/Form";

function AllRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default AllRoutes;
