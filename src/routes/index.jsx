import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Card, Typography, Switch, Button, Dialog, DialogHeader, DialogBody, DialogFooter, CardBody, CardFooter, Input, Select, Option } from "@material-tailwind/react";

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="p-2">
      <h3>Home Page</h3>

      <Card>
      <div className="grid grid-cols-12  gap-4 p-2 ">
        <h2 className="col-span-12 text-left font-bold">Genernal Information</h2>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Team"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="First Name"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Last Name"></Input>

        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Height"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Weight"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="DOB"></Input>

        <h2 className="col-span-12 text-left font-bold">Education Information</h2>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="School"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Class"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="State"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="GPA Score"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="ACT Score"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="SAT Score"></Input>

        <h2 className="col-span-12 text-left font-bold">Team Information</h2>
        <Input containerProps={{ className: "col-span-12 md:col-span-12 lg:col-span-12" }} label="College Committment Status"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Bat"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Throw"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Number"></Input>

        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Primary Position"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Secondary Position"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Pitcher"></Input>

        <h2 className="col-span-12 text-left font-bold">Recruiting Services Information</h2>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Twitter/X Profile URL"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="PBR Profile URL"></Input>
        <Input containerProps={{ className: "col-span-12 md:col-span-4 lg:col-span-4" }} label="Perfect Game Profile URL"></Input>
      </div>

      <CardFooter>
        <Button className='float-right ml-1' color="green">Save</Button>
        <Button className='float-right mr-1' color="blue">Back</Button>
      </CardFooter>
      </Card>
    </div>
  )
}
