import * as React from 'react'
import { useState, useEffect } from 'react'
import ProfileService from '@/services/ProfileService.js'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, Typography, Switch, Button, Dialog, DialogHeader, DialogBody, DialogFooter, CardBody, CardFooter, Input, Select, Option } from "@material-tailwind/react";

export const Route = createFileRoute('/athletePage/$athleteId')({
  component: AthletePageComponent,
})

function AthletePageComponent() {
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
    <h1>Class of ???? - Committed Status</h1>
    <h1>{profile.name} {profile.name}</h1>
    <h1>{profile.email}</h1>
    <h1>{profile.number}</h1>
    <h1>{profile.membership}</h1>
    <p>School - {profile.school}</p>
    <p>Height - Weight -  </p>
    <p>GPA - ACT - SAT</p>
    <p>Travel Team</p>

    <Link
      to="/athletePageEdit/$athleteId"
      params={{
        athleteId: athleteId,
      }}
    >
      <Button color="green">Edit Profile</Button>
    </Link>
</>
  );
}
