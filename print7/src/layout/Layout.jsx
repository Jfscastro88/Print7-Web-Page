import "@mantine/core/styles.css";
import "../../src/index.css";
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "../assets/components/navbar.jsx";
import Footer from "../assets/components/footer.jsx";

function Layout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Saltar para o conteúdo principal
      </a>
      <header role="banner">
        <Navbar />
      </header>
      <main id="main-content" role="main" className="flex-grow">
        <Outlet />
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  );
}
export default Layout;
