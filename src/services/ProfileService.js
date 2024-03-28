import supabase from "../supabaseClient"

  async function getProfile() {
    const { data } = await supabase
        .from('profile')
        .select()
        return data
  }

  async function getUserProfile(athleteId) {
    const { data } = await supabase
        .from('profile')
        .select()
        .eq('id', athleteId)
        .single()
        return data
  }

  async function updateProfile() {
    const { data, error } = await supabase
    .from('profile')
    .update({ name: 'Sydney', email: 'True', number: 5, membership: 'Blue', active: true, school: "CEC", primaryPosition: "SS", secondaryPosition: "P", team: "Ballpark BatDogs", admin: false})
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