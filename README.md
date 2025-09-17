# Print7 — Web App

A modern React + Vite web app for Print7 (design & advertising).  
Showcases services, projects, and contact with a clean, responsive UI.

## 🚀 Tech Stack
- **React + Vite**
- **Mantine UI** (components) + **@mantine/carousel** (Embla)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (micro-animations)
- **React Router** (routing)
- **i18next** for translations (multi-language support)
- **Supabase** for auth & favorites

## ✨ Features
- **Responsive Navbar**
  - Hamburger full-screen menu on mobile
  - Dropdown for service categories
- **SEO**
  - Per-page `<ServiceSeo />` component
  - Meta title & description setup
- **Reusable Components**
  - `CarouselHighlight` (images with centered focus, no autoplay, optional indicators)
  - `Youtube` (autoplay, loop, privacy `youtube-nocookie`)
  - `ScrollToTop` on route change
- **Projects**
  - Grid of clickable cards (4:3 ratio, hover effects)
  - Highlight section with fade/shadow styling
- **Design**
  - Smooth animations with Framer Motion
  - Subtle shadows, gradients, and rounded corners
- **Contact**
  - Social links with accessible buttons
- **Performance**
  - Lazy loading images
  - Mobile-first layout
- **Favicon & Meta setup** included

## 🛠 Getting Started
```bash
# install dependencies
npm i

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview


📂 Project Structure
src/
 ├─ assets/          # Images & static files
 ├─ components/      # Reusable UI components (Carousel, Youtube, SEO, Navbar, etc.)
 ├─ pages/           # Page-level components (Home, About, Services, Catalogs, Contact)
 ├─ translations/    # i18next translations (PT/IT/EN…)
 ├─ context/         # Supabase + FavoritesProvider
 ├─ App.jsx
 └─ main.jsx


📌 To Do / Improvements

Further SEO optimization (structured data, sitemap, Open Graph tags)

Image optimization (consider next/image alternatives or CDN)

Analytics integration