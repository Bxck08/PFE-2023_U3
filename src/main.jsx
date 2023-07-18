import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import './index.css'
import HolaMundo from './components/HolaMundo.jsx'
import Calama from './components/Calama.jsx'
import Ejercicio01 from './components/ejercicios/Ejercicio01.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/hola",
    element: <HolaMundo />
  }
  ,{
    path: "/ciudad",
    element: <Calama/>
  },
  {
    path: "/ejercicio01",
    element: <Ejercicio01/>
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
