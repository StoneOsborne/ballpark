import * as React from 'react'
import supabase from "../supabaseClient"
import { useState } from 'react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import {
  Input,
  Button,
  Typography,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  CardFooter,
} from "@material-tailwind/react";
import { Auth } from '@supabase/auth-ui-react'
// import { useUsers, useSupabaseClient } from '@supabase/auth-helpers-react'


export default function AuthPage() {
  const [ userEmail, setUserEmail ] = useState()
  const [ userPassword, setUserPassword ] = useState()
  const [ showAuth, setShowAuth ] = useState(true)

  const AuthSignInPage = () => setShowAuth(true);
  const AuthSignUpPage = () => setShowAuth(false);


  // const user = useUsers()
  // const supabase = useSupabaseClient()

  async function uploadImage(e) {
    let file = e.target.files[0]

    const { data, error } = await supabase
    .storage
    .from('images')
    .upload("", file)
  }

async function signUp() {
  const { data, error } = await supabase.auth.signUp({
    email: 'stoneosborne44@gmail.com',
    password: 'BornAgain5!',
  })
}

async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  })
}

async function signOut() {
  const { error } = await supabase.auth.signOut()
}

async function deleteUser() {
  const { data, error } = await supabase.auth.admin.deleteUser(
    '1ffc30a8-8057-42ab-81c9-9e9bba1d3f43'
  )
}

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)

    if (event === 'INITIAL_SESSION') {
      // handle initial session
    } else if (event === 'SIGNED_IN') {
      // handle sign in event
    } else if (event === 'SIGNED_OUT') {
      // handle sign out event
    } else if (event === 'PASSWORD_RECOVERY') {
      // handle password recovery event
    } else if (event === 'TOKEN_REFRESHED') {
      // handle token refreshed event
    } else if (event === 'USER_UPDATED') {
      // handle user updated event
    }
  })
  return (
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
                onClick={() => AuthSignUpPage()}
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


    <div className='mt-6'>
          <Button color="yellow" onClick={() => signOut()}>SignOut</Button>
          <Button color="red" onClick={() => deleteUser()}>Delete</Button>
        </div>
      </>
      :
      <>
        <h1>Sign Up Auth</h1>
        {/* <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          onChange={(e) => setUserState(e.target.value)}
        /> */}

      <div className="grid place-items-center">
        <Card className="w-96 mt-2">
          <CardBody className="flex flex-col gap-4">
          <Input label='Email' size="lg" onChange={(e) => setUserEmail(e.target.value)}></Input>
          <Input type='password' size="lg" label='Password' onChange={(e) => setUserPassword(e.target.value)}></Input>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => signUp()} variant="gradient" fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Back to
              <Typography
                onClick={() => AuthSignInPage()}
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

<br />
<br />

        {/* <input type="file" onChange={(e) => uploadImage(e)}></input> */}
    </>
  )
}
