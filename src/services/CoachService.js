import supabase from "../supabaseClient"

  async function getCoach() {
    const { data } = await supabase
        .from('coach')
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

  async function createCoach( name, team, role ) {
    const { data, error } = await supabase
        .from('coach')
        .insert([{name: name, team: team, role: role, active: true}])
        .select()

        if (error) {
          console.log(error)
        }

        if (data) {
          console.log(data)
        }
        window.location.reload()
      }


  async function updateProfile() {
    const { data, error } = await supabase
    .from('profile')
    .update({ name: 'Colby', email: 'True', number: 11, membership: 'Blue', active: true, school: "CEC" })
    .eq('id', '36f87bba-43e7-48a5-bb97-558d5ab2c5f0')
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
    getCoach,
    createCoach,
    updateProfile,
    deleteProfile,
    getUserProfile,
  }