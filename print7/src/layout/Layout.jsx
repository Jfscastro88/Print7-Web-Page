import '@mantine/core/styles.css';
import '../../src/index.css';
import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Navbar from '../assets/components/navbar.jsx';
import Footer from '../assets/components/footer.jsx';

function Layout() {
  return (
    <>
      <Navbar />
      <Box className="flex-grow">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
export default Layout;