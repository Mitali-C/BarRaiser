import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { addData } from "../../redux/actions/test";
import {AddProject} from './addProject/AddProject';
import {ProjectItem} from './projectItem/ProjectItem';
import './Home.scss';
import { connect } from 'react-redux';

const Home = () => {
  // const state = store.getState();
  const state = useSelector((state) => state)
  const allProjects = state.projects;

  useEffect(()=>{
    console.log('home:',allProjects)
  }, [state])

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return(
    <div id="home">
      <AddProject show={showModal} handleClose={toggleModal}></AddProject>
      <div className="header">
        <button onClick={toggleModal}>Add Project</button>
      </div>
      <div>
        {
          allProjects.map((project)=>(
            <ProjectItem data={project}></ProjectItem>
          ))
        }
      </div>
    </div>
  )
}

export default connect()(Home)