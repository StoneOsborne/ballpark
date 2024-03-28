import './Column.css'
import { useProfilestore } from '../stores/ProfileStore'
import { useEffect } from 'react'

export default function Column() {
  const profiles = useProfilestore((ProfileStore) => ProfileStore.profiles)
  const loadprofiles = useProfilestore((ProfileStore) => ProfileStore.loadProfiles)

  console.log(profiles)

  useEffect(loadprofiles, [])

  return <div className='column'>

{profiles.map((profile) => (
      <div key={profile.name}>{profile.name}</div>
    ))}

  </div>
}