import './Column.css'
import { useProfilestore } from '../stores/ProfileStore'
import Task from './task'
import ProfilePage from './ProfilePage.jsx'

export default function Column({ state }) {
  const tasks = useProfilestore((ProfileStore) => ProfileStore.tasks)

  const profiles = useProfilestore((ProfileStore) => ProfileStore.profiles)

  console.log(profiles)

  return <div className='column'>
    {/* <p>{state}</p> */}
    {/* {tasks.map((task) => (
      <Task title={task.title} key={task.title} />
    ))} */}

{profiles.map((profile) => (
      <ProfilePage name={profile.name} number={profile.number} email={profile.email} key={profile.name} />
    ))}

  </div>
}