import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";

function MainLayout() {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <div>
      {noHeaderFooter || <Nav />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
}

export default MainLayout;
