import { Link, Outlet, useLocation } from "react-router-dom";
import { Container, Logo, PublicHeader } from "../styles/styles";
import bg from "./assets/public-layout-macchu-pichu.jpg";
import bg2 from "./assets/bg.jpg";
import Logomarca from "./assets/logo.svg";

const PublicLayout = (): JSX.Element => {
  const location = useLocation();
  return (
    <>
      <Container $img={location.pathname === "/" ? bg : bg2}>
        <PublicHeader>
          <Logo src={Logomarca} />
          <div className="flex flex-column justify-content-center">
            <p className="text-white text-xl text-center font-bold">
              {location.pathname === "/"
                ? "Ja visitou antes?"
                : "Novo por aqui?"}
            </p>
            <Link
              to={location.pathname === "/" ? "/registred" : "/"}
              className="text-white text-xl text-center font-bold hover:text-cyan-500"
            >
              {location.pathname === "/" ? "Confirmar presença" : "Cadastre-se"}
            </Link>
          </div>
        </PublicHeader>
        <Outlet />
      </Container>
    </>
  );
};

export default PublicLayout;
