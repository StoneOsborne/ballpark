import supabase from "../supabaseClient"
import ProfileService from '@/services/ProfileService.js'
import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Card, Typography, Switch, Button, Dialog, DialogHeader, DialogBody, DialogFooter, CardBody, CardFooter, Input, Select, Option } from "@material-tailwind/react";

const TABLE_HEADER = ["#", "Name", "School", "Membership", "Active", "Edit"];

const TABLE_TWO = ["#", "Name", "School"];


// const Players = [
//   {
//     number: "1",
//     name: "Dylan Shelley",
//     school: "Ballard",
//     active: false,
//     membership: "Gold",
//   },
//   {
//     number: "2",
//     name: "Lucas Trier",
//     school: "HLS",
//     active: true,
//     membership: "Bronze",
//   },
//   {
//     number: "3",
//     name: "Will Dietzel",
//     school: "Trinity",
//     active: true,
//     membership: "Silver",
//   },
// ];

export default function TeamRoster() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [profile, setProfile] = useState([])

  useEffect(() => {
    getProfile()
  },[])

async function getProfile() {
  ProfileService.getProfile().then((result) => {
    setProfile(result)
  })
}

const athleteId = 'c6282c03-e6dd-4b93-9f47-a65063df7258'

  return (
    <>
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEADER.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {profile.map(({ id, number, name, school, membership, active }, index) => {
            const isLast = index === profile.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {number}
                  </Typography>
                </td>
                <td className={classes}>

                <Link
                  to="/athletePage/$athleteId"
                  params={{
                  athleteId: profile.id,
                  }}
                  >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </Link>

                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {school}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {membership}
                  </Typography>
                </td>

                <td className={classes}>
                  <Switch defaultChecked={active} disabled={false} color="green"></Switch>
                </td>

                <td>
                  <Button size="sm" variant="text" onClick={handleOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-5 h-5">
                      <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>

      <Dialog open={open} handler={handleOpen}>
        <CardBody className="flex flex-col gap-4">
          <Input label='First Name' size="lg"></Input>
          <Input label='Last Name' size="lg"></Input>
          <Input label='School' size="lg"></Input>
          <Input label='Number' size="lg"></Input>

          <Select label="Membership">
            <Option>Gold</Option>
            <Option>Silver</Option>
            <Option>Brozen</Option>
          </Select>
        </CardBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
</>
  );
}