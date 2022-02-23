import './App.css'
import AboutPage from './components/AboutPage/AboutPage';
import HomePage from './components/IndexPage/IndexPage';
import Navbar from './components/Navbar/Navbar'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ErrorPage from './components/ErrorPage/ErrorPage'
import ProfilePage from './components/ProfilePage/ProfilePage';

import { Routes, Route } from 'react-router-dom'

import projects from './projectsData.json'
import ProjectDetailsPage from './components/ProjectDetailsPage/ProjectDetailsPage';
import ResultsPage from './components/ResultsPage/ResultsPage';



function App() {

  return (

    <div className="App" >

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage theProjects={projects} />} />
        <Route path='/projects/:project_id' element={<ProjectDetailsPage />} />
        <Route path='/resultados' element={<ResultsPage />} />
        <Route path='/profile' element={<ProfilePage loggedUser={{ userName: 'Popino' }} />} />
        {/* <Route path='/profile' element={<ProfilePage loggedUser={undefined} />} /> */}

        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
