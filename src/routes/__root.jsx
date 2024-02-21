import './__root.css'
import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavBar from "../components/NavBar.jsx"
import FooterPage from "../components/FooterPage.jsx"


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
      <FooterPage />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
