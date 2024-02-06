import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavBar from "../components/NavBar.jsx"
import { ThemeProvider } from "@material-tailwind/react"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
    {/* <ThemeProvider>
      <NavBar />
      </ThemeProvider> */}

<ThemeProvider>
      <div className="p-2 flex gap-2 text-lg">
        <Link

          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to={'/about'}
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      </ThemeProvider>
    </>
  )
}
