import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import supabase from "../supabaseClient"
import { useState } from 'react'
import {
  Input,
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import UserPage from "../components/UserPage.jsx"

export const Route = createFileRoute('/AuthPage')({
  component: AuthPageComponent,
})

function AuthPageComponent() {
  const [ userEmail, setUserEmail ] = useState()
  const [ userPassword, setUserPassword ] = useState()

  const [ showAuth, setShowAuth ] = useState(true)
  const showAuthTrue = () => setShowAuth(true);
  const showAuthFalse = () => setShowAuth(false)

  const [ userAuthenticated, setUserAuthenticated ] = useState(false)
  const userAuthenticatedTrue = () => setUserAuthenticated(true);
  const userAuthenticatedFalse = () => setUserAuthenticated(false)


  async function deleteUser() {
    const { data, error } = await supabase.auth.admin.deleteUser(
      '1ffc30a8-8057-42ab-81c9-9e9bba1d3f43'
    )
  }

async function signUp() {
  debugger
  const { data, error } = await supabase.auth.signUp({

    email: userEmail,
    password: userPassword,
  })
}

async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  }
  )
}

async function signOut() {
  const { error } = await supabase.auth.signOut()
}

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)

    if (event === 'INITIAL_SESSION') {
      // handle initial session
    } else if (event === 'SIGNED_IN') {
      console.log('Go to new page')
      userAuthenticatedTrue()
    } else if (event === 'SIGNED_OUT') {
      userAuthenticatedFalse()
    } else if (event === 'PASSWORD_RECOVERY') {
      // handle password recovery event
    } else if (event === 'TOKEN_REFRESHED') {
      // handle token refreshed event
    } else if (event === 'USER_UPDATED') {
      // handle user updated event
    }

    // console.log(session.user.aud)
  })

    // async function uploadImage(e) {
  //   let file = e.target.files[0]

  //   const { data, error } = await supabase
  //   .storage
  //   .from('images')
  //   .upload("", file)
  // }

  return (
    <>
      { userAuthenticated === true ?
        <>
          <UserPage />
          <Button color="yellow" onClick={() => signOut()}>SignOut</Button>
        </>
        :
        <>
        { showAuth === true ?
          <>
            <div className="grid place-items-center">
            <Card className="w-96 mt-2">
              <CardBody className="flex flex-col gap-4">
              <Input label='Email' size="lg" onChange={(e) => setUserEmail(e.target.value)}></Input>
              <Input type='password' size="lg" label='Password' onChange={(e) => setUserPassword(e.target.value)}></Input>
              </CardBody>
              <CardFooter className="pt-0">
                <Button onClick={() => signIn()} variant="gradient" fullWidth>
                  Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                  Don&apos;t have an account?
                  <Typography
                    onClick={() => showAuthFalse()}
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold cursor-pointer"
                  >
                    Sign Up
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>
          </div>
          <Button color="yellow" onClick={() => signOut()}>SignOut</Button>
          <Button color="red" onClick={() => deleteUser()}>Delete</Button>
          </>
          :
          <>
          <div className="grid place-items-center">
            <Card className="w-96 mt-2">
              <CardBody className="flex flex-col gap-4">
              <Input label='Email' size="lg" onChange={(e) => setUserEmail(e.target.value)}></Input>
              <Input type='password' size="lg" label='Password'></Input>
              <Input type='password' size="lg" label='Confirm Password' onChange={(e) => setUserPassword(e.target.value)}></Input>
              </CardBody>
              <CardFooter className="pt-0">
                <Button onClick={() => signUp()} variant="gradient" fullWidth>
                  Sign Up
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                  Back to
                  <Typography
                    onClick={() => showAuthTrue()}
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold cursor-pointer"
                  >
                    Sign In
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>

            <Button color="yellow" onClick={() => signOut()}>SignOut</Button>
          </div>
          </>
        }
        </>
    }
    </>
  )
}