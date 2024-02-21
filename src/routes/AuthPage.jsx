import * as React from 'react'
import AuthService from '@/services/AuthService.js'
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

export const Route = createFileRoute('/AuthPage')({
  component: AuthPageComponent,
})

function AuthPageComponent() {
  const [ userEmail, setUserEmail ] = useState()
  const [ userPassword, setUserPassword ] = useState()

  const [ showAuth, setShowAuth ] = useState(true)

  const [ userAuthenticated, setUserAuthenticated ] = useState(false)

  function signUp() {
    return AuthService.signUp(userEmail, userPassword).then(() => {
      setUserAuthenticated(!userAuthenticated)
    })
  }

  function signIn() {
    return AuthService.signIn(userEmail, userPassword).then(() => {
      setUserAuthenticated(!userAuthenticated)
    })
  }

  function signOut() {
    AuthService.signOut().then(() => {
      setUserAuthenticated(!userAuthenticated)
    })
  }

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)

    // if (event === 'INITIAL_SESSION') {
    //   // handle initial session
    // } else if (event === 'SIGNED_IN') {
    //   userAuthenticatedTrue()
    // } else if (event === 'SIGNED_OUT') {
    //   userAuthenticatedFalse()
    // } else if (event === 'PASSWORD_RECOVERY') {
    //   // handle password recovery event
    // } else if (event === 'TOKEN_REFRESHED') {
    //   // handle token refreshed event
    // } else if (event === 'USER_UPDATED') {
    //   // handle user updated event
    // }
  })

  return (
    <>
      { userAuthenticated === true ?
        <>
          {/* <UserPage /> */}
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
                    onClick={() => setShowAuth(!showAuth)}
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
                    onClick={() => setShowAuth(!showAuth)}
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold cursor-pointer"
                  >
                    Sign In
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>
          </div>
          </>
        }
        </>
    }
    </>
  )
}