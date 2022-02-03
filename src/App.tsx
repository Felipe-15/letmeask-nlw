import React from "react";

import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import AdminRoom from "./pages/AdminRoom";

import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import Room from "./pages/Room";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NewRoom />} path="rooms/new" />
        <Route element={<Room />} path="rooms/:id" />
        <Route element={<AdminRoom />} path="admin/rooms/:id" />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
