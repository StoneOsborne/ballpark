import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutUs')({
  component: AboutUSComponent,
})

function AboutUSComponent() {
  return (
    <div className="p-2">
      <h1>About Us</h1>
    </div>
  )
}
