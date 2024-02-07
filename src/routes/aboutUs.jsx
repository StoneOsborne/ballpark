import * as React from 'react'
import SmoothiePage from "../components/SmoothiePage.jsx"

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutUs')({
  component: AboutUsComponent,
})

function AboutUsComponent() {
  return (
    <>
    <h1>About Us</h1>
      <div className="p-2">
        <SmoothiePage />
      </div>
    </>
  )
}
