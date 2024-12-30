import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { useNavigate } from "react-router-dom";
import ChatSection from "../layouts/chat/ChatSection";
import SideMenu from "../layouts/menus/SideMenu";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      let isLoggedIn = await invoke("is_logged_in");
      if (!isLoggedIn) {
        navigate("/login");
      } else {
        setLoggedIn(true);
      }
    };
    checkLogin();
  }, []);

  if (isLoggedIn === false) {
    return null;
  }

  return (
    <div className="flex h-screen">
      <SideMenu />
      <ChatSection />
    </div>
  );
};

export default HomePage;
