import * as React from 'react'
import { useState, useEffect } from 'react'
import ProfileService from '@/services/ProfileService.js'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, Typography, Switch, Dialog, DialogHeader, DialogBody, DialogFooter, CardBody, CardFooter, Input, Select, Option } from "@material-tailwind/react";

export const Route = createFileRoute('/athletePageEdit/$athleteId')({
  component: AthletePageEditComponent,
})

function AthletePageEditComponent() {
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
    <Button colorScheme='blue'>Button</Button>
    <Card className="mt-4">
      {/* <CardBody className="flex flex-col gap-4"> */}
      <CardBody className="grid gap-4 grid-cols-2 ">
        <Input label='Name' size="lg" defaultValue={profile.name}></Input>
        <Select label="Team" defaultValue={profile.team}>
          <Option>Ballpark BatDogs</Option>
          <Option>Ballpark Oppo Tacos</Option>
          <Option>Ballpark Sliders</Option>
        </Select>
        <Select label="Primary Position" placeholder={profile.primaryPosition} value={profile.primaryPosition} >
          <Option>P</Option>
          <Option>C</Option>
          <Option>1B</Option>
          <Option>2B</Option>
          <Option>3B</Option>
          <Option>SS</Option>
          <Option>LF</Option>
          <Option>CF</Option>
          <Option>RF</Option>
        </Select>
        <Select label="Secondary Position" defaultValue={profile.secondaryPosition}>
          <Option>P</Option>
          <Option>C</Option>
          <Option>1B</Option>
          <Option>2B</Option>
          <Option>3B</Option>
          <Option>SS</Option>
          <Option>LF</Option>
          <Option>CF</Option>
          <Option>RF</Option>
        </Select>
      </CardBody>

      <DialogFooter>
      <Link
      to="/adminPage/$athleteId"
      params={{
        athleteId: athleteId,
      }}
    >
      <Button color="green">Dashboard</Button>
    </Link>
        <Button variant="gradient" color="blue" >
          <span>Save</span>
        </Button>
      </DialogFooter>
    </Card>
</>
  );
}
