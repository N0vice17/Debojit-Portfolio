import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Approuter from "./Components/Approuter/Approuter";
import Footer from "./Components/Footer/Footer";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Approuter />
      </main>
      <Footer />
    </div>
  );
};
