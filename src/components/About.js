import React from 'react'
import Card from './Card'



const About = () => {
  
  return (
    <>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
   <Card 
   title="I Vishal Chaudhary"
   imageUrl="../card.png"
   body="I made this project to help users to store their notes online so that they can access their notes from anywhere by using any device. Users can also edit and delete their notes"
   />
   </div>

</>
  )
}

export default About

