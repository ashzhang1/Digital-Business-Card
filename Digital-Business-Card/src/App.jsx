import React from 'react'
import './styles/App.css'
import ProfileImage from './components/ProfileImage'
import BasicInfo from './components/BasicInfo'
import ContactButtons from './components/ContactButtons'
import AboutInfo from './components/AboutInfo'
import Footer from './components/footer'

function App() {

  return (
    <div className='outer-container'>
      <div className='business-card-container'>
        <ProfileImage />
        <BasicInfo />
        <ContactButtons />
        <AboutInfo />
        <Footer />
      </div>
    </div>
  )
}

export default App
