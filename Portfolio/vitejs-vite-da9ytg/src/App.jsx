import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectItem from './components/ProjectItem'

function App() {

  return (
    <>
      <div>
        <Sidenav />
        <Main />
        <Skills />
        <Projects />
        <ProjectItem />
        </div>
    </>
  )
}

export default App
