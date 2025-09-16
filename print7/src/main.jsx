import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { HelmetProvider } from 'react-helmet-async'
import '@mantine/core/styles.css'
import './index.css'
import App from './App.jsx'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <MantineProvider defaultColorScheme="light">
        <App />
      </MantineProvider>
    </HelmetProvider>
  </React.StrictMode>
)