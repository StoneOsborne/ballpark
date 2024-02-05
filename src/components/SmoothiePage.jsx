import supabase from "../supabaseClient"
import { useEffect, useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  CardFooter,
  Dialog,
  CardBody,
} from "@material-tailwind/react";
import SmoothieCard from "../components/SmoothieCard.jsx"

function SmoothiePage() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const [smoothies, setSmoothies] = useState([])
  const [name, setName] = useState(smoothies.name)
  const [video, setVideo] = useState(smoothies.video)
  const [description, setDescription] = useState(smoothies.description)

  useEffect(() => {
    getSmoothies()
  },[])

async function getSmoothies() {
  const { data } = await supabase
      .from('smoothies')
      .select()
      setSmoothies(data)
}

async function createSmoothie() {
  const { data, error } = await supabase
      .from('smoothies')
      .insert([{name, description, video}])
      .select()

      if (error) {
        console.log(error)
      }

      if (data) {
        console.log(data)
      }
      window.location.reload()
    }
        console.log(smoothies)
  return (
    <>
<br />
<Button onClick={() => handleOpen()}>Create Drill</Button>

    {/* Create Smoothie Dialog */}
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
            Create New Drill
          </Typography>
          <Input
            label="Name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Video Link"
            id="video"
            onChange={(e) => setVideo(e.target.value)}
          />

          <Textarea
          label="Description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>
          </CardBody>
          <CardFooter className="pt-0">
          <Button onClick={() => createSmoothie()}>Save</Button>
          </CardFooter>
        </Card>
      </Dialog>

    <br />

    {smoothies.map((smoothie) => (
      <SmoothieCard key={smoothie.id} smoothie={smoothie} />
    ))}



    {/* <SmoothieCard /> */}
    </>
  )
}

export default SmoothiePage
