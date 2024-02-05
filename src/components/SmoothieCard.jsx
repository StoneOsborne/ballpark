import { useEffect, useState } from 'react'
import supabase from "../supabaseClient"
import {
  Card,
  CardBody,
  CardFooter,
  Textarea,
  Input,
  Typography,
  Button,
  Dialog,
} from "@material-tailwind/react";

export default function SimpleCard(props) {
  const smoothie = props.smoothie
  // const [smoothies, setSmoothies] = useState([])
  const [video, setVideo] = useState(smoothie.video)
  const [name, setName] = useState(smoothie.name)
  const [description, setDescription] = useState(smoothie.description)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

async function updateSmoothie() {
  const { data, error } = await supabase
      .from('smoothies')
      .update([{name, description}])
      .eq('id', smoothie.id)

      if (error) {
        console.log(error)
      }

      if (data) {
        console.log(data)
      }
      window.location.reload()
    }

async function deleteSmoothie() {
  const { data, error } = await supabase
      .from('smoothies')
      .delete([{name, description}])
      .eq('id', smoothie.id)

      if (error) {
        console.log(error)
      }

      if (data) {
        console.log(data)
      }
      window.location.reload()
    }

  return (

  <>
      {/* Dialog for Editing */}
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
            Editing {smoothie.name}
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
          <Button color='blue' onClick={() => handleOpen()}>Back</Button>
          <Button color='green' onClick={() => updateSmoothie()}>Update</Button>
          <Button color='red' onClick={() => deleteSmoothie()}>Delete</Button>
          </CardFooter>
        </Card>
      </Dialog>

{/* Smoothie Card */}
    <Card className="mt-6 w-96">
        <CardBody>

          <video className="h-full w-full rounded-lg" controls>
            <source src={smoothie.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {smoothie.name}
          </Typography>
          <Typography>{smoothie.description}</Typography>
          </CardBody>
        <CardFooter className="pt-0">
        <Button color='black' onClick={() => handleOpen()}>Edit</Button>
        </CardFooter>
    </Card>
    </>
  )
}