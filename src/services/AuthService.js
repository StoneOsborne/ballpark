import supabase from "../supabaseClient"

  async function signUp(userEmail, userPassword) {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    })
    if (error) {
      console.log(error)
    }

    if (data) {
      console.log(data)
    }
    return data
  }

  async function signIn(userEmail, userPassword) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    }
    )
    if (error) {
      console.log(error)
    }

    if (data) {
      console.log(data)
    }
    return data
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    }
  }

  export default {
    signUp,
    signIn,
    signOut,
  }