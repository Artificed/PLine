import ChatSection from "../layouts/chat/ChatSection";
import SideMenu from "../layouts/menus/SideMenu";

const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <ChatSection />
    </div>
  );
};

export default HomePage;
