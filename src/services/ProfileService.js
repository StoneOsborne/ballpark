import supabase from "../supabaseClient"

  async function getProfile() {
    const { data } = await supabase
        .from('profile')
        .select()
        return data
  }

  async function getUserProfile(params) {
    debugger
    const { data } = await supabase
        .from('profile')
        .select()
        return data
  }

  async function updateProfile() {
    const { data, error } = await supabase
    .from('profile')
    .update({ name: 'Colby', email: 'True', number: 11, membership: 'Blue', active: true, school: "CEC" })
    .eq('id', 'c6282c03-e6dd-4b93-9f47-a65063df7258')
    .select()

    if (error) {
      console.log(error)
    }

    if (data) {
      console.log(data)
    }
  }

  async function deleteProfile() {
    const { data, error } = await supabase
    .from('profile')
    .delete()
    .match({id: 'b5df426d-af0c-40e2-ade7-8553748b4b16'})
    .select()

    if (error) {
      console.log(error)
    }

    if (data) {
      console.log(data)
    }
  }

  export default {
    getProfile,
    updateProfile,
    deleteProfile,
    getUserProfile,
  }