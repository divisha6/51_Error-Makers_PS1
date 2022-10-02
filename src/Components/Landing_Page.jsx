import React from 'react'
import Card from 'react-bootstrap/Card';

function Landing_Page() {
  return (
   <div>
     <Card style={{margin:"5vw"}} className="bg-dark text-white">
      <Card.Img  src="http://www.progressiveteacher.in/wp-content/uploads/2019/10/029.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{padding:"1.5%",fontWeight:"700",fontSize:"3vw"}}>Helping Teachers and Students<br/> for brighter India</Card.Title>
      </Card.ImgOverlay>
    </Card>
   </div>
  )
}

export default Landing_Page