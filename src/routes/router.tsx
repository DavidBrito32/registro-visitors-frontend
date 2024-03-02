import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/publicLayout";
import HomePage from "../pages/home";
import RegistedPage from "../pages/home/registrado";
import AdminLayout from "../layouts/adminLayout";
import ResumoPage from "../pages/Admin/Resumo";
import UsersPage from "../pages/Admin/users";
import VisitorsPage from "../pages/Admin/visitors";
import LoginPage from "../pages/login";
import BlockedPage from "../pages/Admin/blockedVisitors";
import { CheckToken } from './../hooks/CheckToken';
import NotFoundPage from "../pages/notFount";

const Ways = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="registred" element={<RegistedPage />} />
          </Route>
          <Route path="/auth" element={<LoginPage />} />
            <Route path="/admin" element={<CheckToken><AdminLayout /></CheckToken>}>
              <Route index element={<ResumoPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="visitors" element={<VisitorsPage />} />
              <Route path="blacklist" element={<BlockedPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Ways;