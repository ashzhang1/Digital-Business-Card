import React from 'react'
import './styles/App.css'
import ProfileImage from './components/ProfileImage'
import BasicInfo from './components/BasicInfo'
import ContactButtons from './components/ContactButtons'

function App() {

  return (
    <div className='outer-container'>
      <div className='business-card-container'>
        <ProfileImage />
        <BasicInfo />
        <ContactButtons />
      </div>
    </div>
  )
}

export default App
