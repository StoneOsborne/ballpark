import './Task.css'

const STATUS = 'PLANNED'

export default function ProfilePage({ name, number, email }) {
  return (
    <>
    <div>{name}</div>
    <div>{number}</div>
    <div>{email}</div>
    </>
  )

}