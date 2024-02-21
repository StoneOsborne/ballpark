import supabase from "../supabaseClient"
import { useEffect, useState } from 'react'

  async function signUp(userEmail, userPassword) {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    })
  }

  async function signIn(userEmail, userPassword) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    }
    )
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

  export default {
    signUp,
    signIn,
    signOut,
  }