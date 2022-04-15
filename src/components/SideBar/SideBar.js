import './SideBar.scss';
import { useNavigate } from 'react-router';

export const SideBar = () => {
  const history = useNavigate()
  return(
    <div id="side-bar">
      <div className='nav-item' onClick={()=>{
        history('/')
      }}>
        <p>Projects</p>
      </div>
      <div className='nav-item' onClick={()=>{
        history('/clients')
      }}>
        <p>Clients</p>
      </div>
    </div>
  )
}