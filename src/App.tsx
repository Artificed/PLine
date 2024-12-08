import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Sidebar from "./layouts/sidebar";

function App() {
  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default App;
