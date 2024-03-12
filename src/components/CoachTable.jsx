import ProfileService from '@/services/ProfileService.js'
import CoachService from '@/services/CoachService.js'
import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Card, Typography, Switch, Button, Dialog, DialogHeader, DialogBody, DialogFooter, CardBody, CardFooter, Input, Select, Option } from "@material-tailwind/react";

const TABLE_HEADER = ["Name", "Team", "Role", "Active", "Edit"];

export default function CoachTable() {
  // const [coachName, setCoachName] = useState()
  const [coach, setCoach] = useState([])
  const [name, setName] = useState(coach.name)
  const [team, setTeam] = useState(coach.team)
  const [role, setRole] = useState(coach.role)

  const [open, setOpen] = useState(false);
  const [openCoachDialog, setCoachDialog] = useState(false);
  const handleOpen = () => setOpen(!open);
  const coachDialog = () => setCoachDialog(!openCoachDialog);


  useEffect(() => {
    getCoach()
  },[])

async function getCoach() {
  CoachService.getCoach().then((result) => {
    setCoach(result)
  })
}

async function createCoach2() {
  debugger
  CoachService.createCoach2(name, team, role)
    }

// async function createCoach(coachName) {
//   debugger
//   CoachService.createCoach(coachName)
//   }

// console.log(coachName)
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
          {coach.map(({ id, name, team, role, active }, index) => {
            const isLast = index === coach.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {team}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {role}
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

    <Button onClick={coachDialog}>Create Coach</Button>

    <Button onClick={() => handleOpen()}>Create Coach</Button>

{/* Create Coach Dialog */}
    {/* <Dialog open={openCoachDialog} handler={coachDialog}>
        <CardBody className="flex flex-col gap-4">
          <Input label='Name' size="lg" onChange={(e) => setCoachName(e.target.value)}></Input>
          <Input label='Team' size="lg"></Input>
          <Select label="Role">
            <Option>Head Coach</Option>
            <Option>Assistant Coach 1</Option>
            <Option>Assistant Coach 2</Option>
            <Option>Assistant Coach 3</Option>
            <Option>Assistant Coach 4</Option>
          </Select>
        </CardBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={coachDialog}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={createCoach}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog> */}

<Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
          <form>
        <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            Create New Coach
          </Typography>
          <Input
            label="Name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Team"
            id="name"
            onChange={(e) => setTeam(e.target.value)}
          />

          <Input
            label="Role"
            id="name"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
      </form>
          </CardBody>
          <CardFooter className="pt-0">
          <Button onClick={() => createCoach2()}>Save</Button>
          </CardFooter>
        </Card>
      </Dialog>




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