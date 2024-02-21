import supabase from "../supabaseClient"
import { useEffect, useState } from 'react'

  async function signUp(userEmail, userPassword) {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    })
  }



  export default {
    signUp,
    
  }