import ProfileService from '@/services/ProfileService.js'
import { Link } from '@tanstack/react-router'
import { Button } from "@material-tailwind/react";

function UserPage() {
  async function updateProfile() {
    ProfileService.updateProfile()
    }

  async function deleteProfile() {
    ProfileService.deleteProfile()
    }

  const athleteId = 'c6282c03-e6dd-4b93-9f47-a65063df7258'

  return (
    <>
    <br />
    <br />
    <Button color="blue" onClick={updateProfile}>Update</Button>

    <Button color="red" onClick={deleteProfile}>Delete</Button> */

    <Link
      to="/athletePage/$athleteId"
      params={{
        athleteId: athleteId,
      }}
    >
      <Button color="green">Send Id</Button>
    </Link>
    </>
  )
}

export default UserPage
