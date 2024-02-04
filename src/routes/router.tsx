import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/publicLayout";
import HomePage from "../pages/home";
import RegistedPage from "../pages/home/registrado";

const Ways = (): JSX.Element => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PublicLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="registred" element={<RegistedPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Ways;