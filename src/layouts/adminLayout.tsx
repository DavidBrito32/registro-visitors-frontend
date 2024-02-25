import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import {
  AutoContainer,
  FlexContainer,
  Header,
  ListItem,
  ListMenu,
  Logo,
  NavBar,
  Title,
} from "../styles/styles";
import Logomarca from "./assets/logo.svg";
import { PiChartPieSliceFill } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { SlBookOpen } from "react-icons/sl";
import { FaList } from "react-icons/fa";

const AdminLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <FlexContainer>
        <Header>
          <Logo src={Logomarca} alt="logomarca Museum" />
        </Header>
        <NavBar>
          <Title $size="32px">DashBoard</Title>
          <ListMenu>
            <ListItem
              onClick={() => navigate("/admin")}
              className={location.pathname === "/admin" ? "active" : ""}
            >
              <PiChartPieSliceFill className="text-white w-2rem h-auto" />
              <Link to={"/admin"} className="text-white text-lg font-bold">
                Resumo
              </Link>
            </ListItem>
            <ListItem
              className={location.pathname === "/admin/users" ? "active" : ""}
              onClick={() => navigate("/admin/users")}
            >
              <FiUsers className="text-white w-2rem h-auto" />
              <Link
                to={"/admin/users"}
                className="text-white text-lg font-bold"
              >
                Usuarios
              </Link>
            </ListItem>
            <ListItem
              onClick={() => navigate("/admin/visitors")}
              className={
                location.pathname === "/admin/visitors" ? "active" : ""
              }
            >
              <SlBookOpen className="text-white w-2rem h-auto" />
              <Link
                to={"/admin/visitors"}
                className="text-white text-lg font-bold"
              >
                Visitantes
              </Link>
            </ListItem>
            <ListItem
              onClick={() => navigate("/admin/blacklist")}
              className={
                location.pathname === "/admin/blacklist" ? "active" : ""
              }
            >
              <FaList className="text-white w-2rem h-auto" />
              <Link
                to={"/admin/blacklist"}
                className="text-white text-lg font-bold"
              >
                Lista Negra
              </Link>
            </ListItem>
          </ListMenu>
        </NavBar>
        <AutoContainer>
          <Outlet />
        </AutoContainer>
      </FlexContainer>
    </>
  );
};

export default AdminLayout;
