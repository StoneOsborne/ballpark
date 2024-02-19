import supabase from "../supabaseClient"
import { useEffect, useState } from 'react'

function UserPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  },[])

async function getUsers() {
  const { data } = await supabase
      .from('profiles')
      .select()
      setUsers(data)
}

  return (
    <>
    <br />
    <br />
    {users.map((user) => (
      <h1 key={user.id}>{user.id}</h1>
    ))}
    </>
  )
}

export default UserPage
