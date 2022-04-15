import { useSelector } from 'react-redux';
import './Clients.scss'
export const Clients = () => {
  const state = useSelector((state) => state)
  // const projects = state.projects;
  const clients = state.clients;
  return (
    <div id="clients">
      <ul>
        {
          clients.map((client)=>(
            <li>{client}</li>
          ))
        }
      </ul>
    </div>
  )
}