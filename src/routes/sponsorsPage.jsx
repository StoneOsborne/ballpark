import * as React from 'react'
import CreateCoach from "../components/CreateCoach.jsx"
import TestPage from '../components/TestPage'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sponsorsPage')({
  component: SponsorsPageComponent,
})

function SponsorsPageComponent() {
  return (
    <>
    <h1>Sponsors</h1>
    {/* <CreateCoach /> */}
    <TestPage />
    </>
  )
}
