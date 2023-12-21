import React from 'react'
import Navbar from '../../Componant/Navbar'
import "./../Home/Home.css"


function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className='app-title'>Account </h1>


      <div classname="app-body">

        <div className='contact-container'>
          <h2> Display contact</h2>
        </div>

        <div className='add-contact-container'>
          <h2>Add contact</h2>
        </div>
      </div>
    </div>
  )
}

export default Home