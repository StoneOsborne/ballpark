import supabase from "../supabaseClient.js"
import CoachService from '@/services/CoachService.js'
import { useEffect, useState } from 'react'
import {
  Card,
  Input,
  Button,
  Switch,
  Typography,
  CardFooter,
  Dialog,
  CardBody,
} from "@material-tailwind/react";

const TABLE_HEADER = ["Name", "Team", "Role", "Active", "Edit"];

function CreateCoachPage() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const [coach, setCoach] = useState([])
  const [name, setName] = useState()
  const [team, setTeam] = useState()
  const [role, setRole] = useState()

  useEffect(() => {
    getCoach()
  },[])

async function getCoach() {
  const { data } = await supabase
      .from('coach')
      .select()
      setCoach(data)
}

async function createCoach() {
  CoachService.createCoach(name, team, role)
    }

  return (
    <>
    <br />
{/*
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
            const classNamees = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={id}>
                <td className={classNamees}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>

                <td className={classNamees}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {team}
                  </Typography>
                </td>

                <td className={classNamees}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {role}
                  </Typography>
                </td>

                <td className={classNamees}>
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
    </Card> */}


    {/* <Button onClick={() => handleOpen()}>Create Coach</Button> */}


    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div className="flex items-center justify-between gap-8 ">
          <div>
            <h5
              className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Ballpark Coaches List
            </h5>
          </div>

          <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
            <button
              onClick={() => handleOpen()}
              className="flex items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                className="w-4 h-4">
                <path
                  d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z">
                </path>
              </svg>
              Add Coach
            </button>
          </div>
        </div>
      </div>



  <div className="p-2 px-0 overflow-scroll">
    <table className="w-full mt-4 text-left table-auto min-w-max">
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
            const classNamees = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={id}>
                <td className={classNamees}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>

                <td className={classNamees}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {team}
                  </Typography>
                </td>

                <td className={classNamees}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {role}
                  </Typography>
                </td>

                <td className={classNamees}>
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
  </div>

  {/* <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
      Page 1 of 10
    </p>
    <div className="flex gap-2">
      <button
        className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        Previous
      </button>
      <button
        className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        Next
      </button>
    </div>
  </div> */}
</div>

{/* Create Coach Dialog */}
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
          <Button onClick={() => createCoach()}>Save</Button>
          </CardFooter>
        </Card>
      </Dialog>

    </>
  )
}

export default CreateCoachPage
