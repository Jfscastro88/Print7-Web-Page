import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/homepage.jsx";
import Layout from "../layout/Layout.jsx";
import About from "../pages/about/about.jsx";
import Contact from "../pages/contacts/contacts.jsx";
import Catalogs from "../pages/catalogs/catalogs.jsx";

function Routing() {
    return (
    <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalogs" element={<Catalogs />} />
            {/* Catch-all: mostra 404 em vez de redirecionar */}
            <Route path="*" element={<NotFoundPage />} />
        </Route>
        </Routes>
    </BrowserRouter>
    );
}
export default Routing;