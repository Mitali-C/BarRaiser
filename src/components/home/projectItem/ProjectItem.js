import './ProjectItem.scss';
import {store} from '../../../index'
import { startProjectTimer, endProjectTimer, deleteproject } from '../../../redux/actions/projects/projects';
import { useEffect, useState } from 'react';

export const ProjectItem = ({data}) => {
  const [time, setTime] = useState(data.time)
  
  useEffect(() => {
    console.log(data)
    setTime(data.time)
  }, [data.time])

  useEffect(() => {
    console.log(time)
  }, [time])
  
  const startTimer = () => {
    store.dispatch(
      startProjectTimer(data.id)
    )
    let interval = setInterval(()=>{
      console.log(data.isTimerActive)
      if(!data.isTimerActive){
        clearInterval(interval)
      }
      else{
        setTime(prevTime => prevTime + 1);
      }
    }, 1000)
  }

  const endTimer = () => {
    store.dispatch(
      endProjectTimer(data.id, time)
    )
    // clearInterval(interval)
  }

  return(
    <div id="project-item">
      <div className='details-conatiner'>
        <h6>{data.projectName}</h6>
        <p>{data.client}</p>
      </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div className='timer-container'>
          {time}
        </div>
        <div className='actions-container'>
          <button style={{marginRight:'1rem'}} onClick={()=>{
            if(!data.isTimerActive){
              startTimer();
            }
            else{
              endTimer();
            }
          }}>{data.isTimerActive ? 'Stop' : 'Start'} timer</button>
          <button onClick={()=>{
            store.dispatch(
              deleteproject(data.id)
            )
          }}>Delete Project</button>
        </div>
      </div>
    </div>
  )
}