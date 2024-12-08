import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import SideMenu from "./layouts/menus/SideMenu";
import ChatSection from "./layouts/chat/ChatSection";

function App() {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <ChatSection />
    </div>
  );
}

export default App;
