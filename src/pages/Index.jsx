import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Index = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Index;
