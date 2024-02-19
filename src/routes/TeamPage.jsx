import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

import TeamRoster from "../components/TeamRoster.jsx"

export const Route = createFileRoute('/TeamPage')({
  component: TeamPageComponent,
})

function TeamPageComponent() {
  return (
    <div className="p-2">
      <h3>Team Page</h3>

      <TeamRoster />
    </div>
  )
}
