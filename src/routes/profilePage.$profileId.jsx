import * as React from 'react'
import { useState, useEffect } from 'react'
import ProfileService from '@/services/ProfileService.js'
import { createFileRoute } from '@tanstack/react-router'
import { Card, Typography, Switch, Button, Dialog, DialogHeader, DialogBody, DialogFooter, CardBody, CardFooter, Input, Select, Option } from "@material-tailwind/react";

export const Route = createFileRoute('/profilePage/$profileId')({
  component: ProfilePageComponent,
})

function ProfilePageComponent() {
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
    <h1>{profile.name}</h1>
</>
  );
}
