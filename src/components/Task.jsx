import './Task.css'

const STATUS = 'PLANNED'

export default function Task({ name }) {
  return (
    <div className="task">
      <div>{name}</div>
      <div className='bottomWrapper'>
        <div></div>
        <div className='status'>{STATUS}</div>
      </div>
    </div>
  )

}