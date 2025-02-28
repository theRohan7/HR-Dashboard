import { ChevronDown, Ellipsis } from 'lucide-react'
import '../CSS/Schedule.css'
import { scheduleData } from '../dashboardData'
function Schedule() {
  return (
    <div className='schedule-container' >
      <div className='schedule-header' >
        <h3 >Upcoming Schedule</h3>
        <div className='dropdown' >
          This week <ChevronDown  color="#B2B2B2" />
        </div>
      </div>
      <div className='schedule-content' >
        <p className='schedule-category' >Priority</p>
        <div className='schedule-cards' >
          {scheduleData.filter((item) => item.priority === 'High').map((item) => (
            <div key={item.id} className='schedule-card' >
              <div>
              <p className='schedule-card-title' >{item.title}</p>
              <p className='schedule-card-time' >{item.timeline}</p>
              </div>
              <Ellipsis fill="#B2B2B2" color="#B2B2B2" />
            </div>
          ))}
        </div>
        <p className='schedule-category' >Other</p>
        <div className='schedule-cards' >
          {scheduleData.filter((item) => item.priority === 'other').map((item) => (
            <div key={item.id} className='schedule-card' >
              <div>
              <p className='schedule-card-title' >{item.title}</p>
              <p className='schedule-card-time' >{item.timeline}</p>
              </div>
              <Ellipsis fill="#B2B2B2" color="#B2B2B2"  />
            </div>
          ))}
        </div>



      </div>
      <button>Create a New Schedule</button>
      
    </div>
  )
}

export default Schedule
