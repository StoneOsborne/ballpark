import { useEffect, useState } from 'react'
import supabase from "../supabaseClient"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
  Button,
} from "@material-tailwind/react";




export default function SimpleCard(props) {
  const smoothie = props.smoothie
  // const [smoothies, setSmoothies] = useState([])
  const [title, setTitle] = useState(smoothie.title)
  const [ editing, setEditing] = useState(false)

async function updateSmoothie() {
  const { data, error } = await supabase
      .from('smoothies')
      .insert([{title}])
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
    <Card className="mt-6 w-96">
      { editing == false ?
      <>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {smoothie.title}
          </Typography>
          <Typography>Smoothie Description</Typography>
          </CardBody>
        <CardFooter className="pt-0">
          <Button color="red">Delete</Button>
          <Button onClick={() => setEditing(true)}color="blue">Edit</Button>
        </CardFooter>
      </>
        :
        <>
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Editing {smoothie.title}
          </Typography>
          <form>
            <div className="mb-1 flex flex-col gap-6">
              <Input
              size="lg"
              label='title'
              onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </form>
          </CardBody>
        <CardFooter className="pt-0">
        <Button onClick={() => setEditing(false)}color="green">Back</Button>
        <Button onClick={() => updateSmoothie()}color="green">Update</Button>
        </CardFooter>
        </>
}
    </Card>
  );
}