import { Outlet, useLocation, Link } from "react-router-dom";
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

const AdminLayout = (): JSX.Element => {
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
              className={location.pathname === "/admin" ? "active" : ""}
            >
              <PiChartPieSliceFill className="text-white w-2rem h-auto" />
              <Link to={"/admin"} className="text-white text-lg font-bold">
                Resumo
              </Link>
            </ListItem>
            <ListItem
              className={location.pathname === "/admin/users" ? "active" : ""}
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
