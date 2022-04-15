import {Modal, Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Creatable from 'react-select/creatable';
import { addProject } from '../../../redux/actions/projects/projects';
import {store} from '../../../index';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import './AddProject.scss'

export const AddProject = ({show, handleClose}) => {
  const [projectName, setProjectName] = useState('')
  const [client, setClient] = useState();
  const [options, setOptions] = useState()

  const state = useSelector((state) => state)
  // const projects = state.projects;
  const clients = state.clients;

  useEffect(()=>{
    let data = [];
    for(let i=0;i<clients.length;i++){
      data.push({
        value:clients[i],
        label:clients[i]
      })
    }
    setOptions(data)
  }, [clients])

  const submit = () => {
    const payload = {
      id:uuidv4(),
      projectName,
      client:client.label,
      time:0, 
      isTimerActive:false
    }
    console.log(payload);
    store.dispatch(
      addProject(payload)
    )
    close()
  }

  const close = () => {
    setProjectName('');
    setClient()
    handleClose()
  }

  return(
    <Modal show={show} onHide={close} id="add-project-modal">
      <Modal.Header>
        <Modal.Title>Add new project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{width:'100%', fontSize:12, marginBottom:0}} className='label'>Project Name</p>
        <input style={{width:'100%', fontSize:12, marginBottom:'1rem'}} placeholder='Project name' value={projectName} onChange={(e)=>{
          setProjectName(e.target.value)
        }}></input>

        <p style={{width:'100%', fontSize:12, marginBottom:0}} className='label'>Client Name</p>
        <Creatable style={{width:'100%', fontSize:12}} value={client} options={options} onChange={(e)=>{setClient(e)}}></Creatable>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={submit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}