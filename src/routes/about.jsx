import * as React from 'react'
import SmoothiePage from "../components/SmoothiePage.jsx"
import { ThemeProvider } from "@material-tailwind/react"

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <ThemeProvider>
    <div className="p-2">
      <SmoothiePage />
    </div>
    </ThemeProvider>
  )
}
