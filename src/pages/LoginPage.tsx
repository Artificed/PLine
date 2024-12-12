import LoginForm from "../components/LoginForm";
import QRLogin from "../components/QRLogin";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#2D2E30]">
      <LoginForm />
      <QRLogin />
    </div>
  );
};

export default LoginPage;
