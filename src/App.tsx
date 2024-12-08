import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-red-400">
        Hello World!
      </h1>
    </div>
  );
}

export default App;
