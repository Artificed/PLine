import LoginForm from "../components/login/LoginForm";
import QRLogin from "../components/login/QRLogin";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#2D2E30]">
      <LoginForm />
      <QRLogin />
    </div>
  );
};

export default LoginPage;
