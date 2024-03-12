import * as React from 'react'
import { useState, useEffect } from 'react'
import ProfileService from '@/services/ProfileService.js'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, Typography, Switch, Button, Dialog, DialogHeader, DialogBody, DialogFooter, CardBody, CardFooter, Input, Select, Option } from "@material-tailwind/react";
import CreateCoach from "../components/CreateCoach.jsx"

export const Route = createFileRoute('/adminPage/$athleteId')({
  component: AdminPageComponent,
})

function AdminPageComponent() {
  const { athleteId } = Route.useParams()
  const [profile, setProfile] = useState([])

  function getUserProfile(athleteId) {
    ProfileService.getUserProfile(athleteId).then((result) => {
      setProfile(result)
    })
  }
  console.log(profile)

  useEffect(() => {
    getUserProfile(athleteId)
  },[])

  return (
    <>
  <CreateCoach />

</>
  );
}
