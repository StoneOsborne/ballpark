import ProfileService from '@/services/ProfileService.js'
import { Button } from "@material-tailwind/react";

function UserPage() {
  async function updateProfile() {
    ProfileService.updateProfile()
    }

  async function deleteProfile() {
    ProfileService.deleteProfile()
    }

  return (
    <>
    <br />
    <br />
    <Button color="blue" onClick={updateProfile}>Update</Button>

    <Button color="red" onClick={deleteProfile}>Delete</Button>
    </>
  )
}

export default UserPage
