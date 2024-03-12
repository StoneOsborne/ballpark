import { useState, useEffect } from 'react'
import ProfileService from '@/services/ProfileService.js'





export default function ProfileStore() {

const [profile, setProfile] = useState([])

function useProfile() {
  const [profile, setProfile] = useState([])

}


async function getProfile() {
  debugger
  ProfileService.getProfile().then((result) => {
    setProfile(result)
    return profile
  })
}

useEffect(() => {
  getProfile()
},[])
  }