import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Column from '../components/Column'


export const Route = createFileRoute('/aboutUs')({
  component: AboutUSComponent,
})

function AboutUSComponent() {
  return (
    <div className="p-2">
      <h1>About Us</h1>

      <Column state="PLANNED" />

      {/* <Column state="ONGOING" />
      <Column state="DONE" /> */}
    </div>
  )
}
