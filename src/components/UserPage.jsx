import supabase from "../supabaseClient"
import { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";

function UserPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  },[])

async function getUsers() {
  const { data } = await supabase
      .from('profile')
      .select()
      setUsers(data)
}

async function updateUser() {
  const { data, error } = await supabase
  .from('profile')
  .update({ name: 'Sydney', email: 'True', number: 11, membership: 'Blue', active: true, school: "Fenwick" })
  .eq('id', 'dabf1d41-8c55-4d73-ba3e-76c8d7d50070')
  .select()
}

async function deleteUser() {
  const { data, error } = await supabase
  .from('profile')
  .delete()
  .match({id: 'b5df426d-af0c-40e2-ade7-8553748b4b16'})
  .select()
}


  return (
    <>
    <br />
    <br />
    <Button color="blue" onClick={updateUser}>Update</Button>

    <Button color="red" onClick={deleteUser}>Delete</Button>
    </>
  )
}

export default UserPage
