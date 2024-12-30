import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { useNavigate } from "react-router-dom";
import ChatSection from "../layouts/chat/ChatSection";
import SideMenu from "../layouts/menus/SideMenu";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      let isLoggedIn = await invoke("is_logged_in");
      if (!isLoggedIn) {
        navigate("/login");
      } else {
        getChatPreviews();
      }
    };

    const getChatPreviews = async () => {
      console.log("Executing GetChatPreviews");
      let chatPreviews = await invoke("get_chat_previews");
      console.log(chatPreviews);
    };

    checkLogin();
  }, []);

  return (
    <div className="flex h-screen">
      <SideMenu />
      <ChatSection />
    </div>
  );
};

export default HomePage;
