import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import supabase from "../supabaseClient"
import { useState } from 'react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

import { Button } from "@material-tailwind/react";

import { Auth } from '@supabase/auth-ui-react'
// import { useUsers, useSupabaseClient } from '@supabase/auth-helpers-react'


export const Route = createFileRoute('/AuthUI')({
  component: AuthUIComponent,
})

function AuthUIComponent() {
  const [ userState, setUserState ] = useState(false)
  const userStateTrue = () => setUserState(true);
  const userStateFalse = () => setUserState(false)

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)

    if (event === 'INITIAL_SESSION') {
      // handle initial session
    } else if (event === 'SIGNED_IN') {
      console.log(session)
      userStateTrue()
    } else if (event === 'SIGNED_OUT') {
      userStateFalse()
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
      {userState === true ?
        <>
          <Button color="yellow" onClick={() => signOut()}>SignOut</Button>
        </>
        :
        <>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        </>
      }
    </>
)}
