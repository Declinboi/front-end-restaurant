import React from "react";
import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
