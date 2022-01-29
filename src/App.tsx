import React from "react";

import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";

import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NewRoom />} path="rooms/new" />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
