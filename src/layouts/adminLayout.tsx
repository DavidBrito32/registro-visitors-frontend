/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import {
  AutoContainer,
  Box,
  Button,
  FlexContainer,
  Header,
  ListItem,
  ListMenu,
  Logo,
  NavBar,
  Text,
  Title,
} from "../styles/styles";
import Logomarca from "./assets/logo.svg";
import { PiChartPieSliceFill } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { SlBookOpen } from "react-icons/sl";
import { FaList } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Data {
  name: string | null;
  role: string | null;
  email: string | null;
}

const AdminLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dados, setDados] = useState<Data>({ name: "", role: "", email: "" });
  const user = localStorage.getItem("usuario");
  const usuario: Data = user !== null && JSON.parse(user);

  useEffect(() => {
    setDados({
      name: usuario && usuario.name,
      role: usuario && usuario.role,
      email: usuario && usuario.email,
    });
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <FlexContainer>
        <Header>
          <Logo src={Logomarca} alt="logomarca Museum" />
          <Box $dir="column">
            <Text>{dados.name}</Text>
            <Button
              onClick={logout}
              $bg="green"
              $size="14px"
              $w="64px"
              $p="4px"
              $radius="24px"
            >
              Sair
            </Button>
          </Box>
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
            {dados.role === "Admin" && (
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
            )}
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
