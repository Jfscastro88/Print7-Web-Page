import '@mantine/core/styles.css';
import './index.css';
import { MantineProvider, Box } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/layout/Layout.jsx';
import HomePage from '../src/pages/homepage/homepage.jsx';
import AboutPage from '../src/pages/about/about.jsx';
import ContactPage from '../src/pages/contacts/contacts.jsx';
import Catalogs from './pages/catalogs/catalogs.jsx';
import Advertisements from './pages/works/ad.jsx';
import Cars from './pages/works/cars.jsx';
import Gifts from './pages/works/gifts.jsx';
import Interior from './pages/works/interior.jsx';
import Laser from './pages/works/laser.jsx';
import Logos from './pages/works/logos.jsx';
import Neon from './pages/works/neon.jsx';
import Others from './pages/works/others.jsx';
import Plates from './pages/works/plates.jsx';
import Relief from './pages/works/relief.jsx';
import Stand from './pages/works/stand.jsx';
import Stationery from './pages/works/stationery.jsx';
import Uniforms from './pages/works/uniforms.jsx';
import Window from './pages/works/window.jsx';
import ScrollToTop from '../src/assets/components/scrolltop.jsx';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
      <ScrollToTop behavior="smooth" />
        <Box className="min-h-screen bg-gray-100 flex flex-col">
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="catalogs" element={<Catalogs />} />
              <Route path="ad" element={<Advertisements/>} />
              <Route path="cars" element={<Cars/>} />
              <Route path="gifts" element={<Gifts/>} />
              <Route path="interior" element={<Interior/>} />
              <Route path="laser" element={<Laser/>} />
              <Route path="logos" element={<Logos/>} />
              <Route path="neon" element={<Neon/>} />
              <Route path="others" element={<Others/>} />
              <Route path="plates" element={<Plates/>} />
              <Route path="relief" element={<Relief/>} />
              <Route path="stand" element={<Stand/>} />
              <Route path="stationery" element={<Stationery/>} />
              <Route path="uniforms" element={<Uniforms/>} />
              <Route path="window" element={<Window/>} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </MantineProvider>
  );
}
export default App;