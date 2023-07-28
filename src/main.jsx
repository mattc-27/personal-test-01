import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Welcome from './Welcome';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
