import React from 'react'
import './styles/App.css'
import ProfileImage from './components/ProfileImage'
import BasicInfo from './components/BasicInfo'

function App() {

  return (
    <div className='outer-container'>
      <div className='business-card-container'>
        <ProfileImage />
        <BasicInfo />
      </div>
    </div>
  )
}

export default App
