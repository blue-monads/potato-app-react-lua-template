import { RouterProvider } from "react-router";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from "./frontend/router"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
