import React from 'react'
import {Card} from 'react-bootstrap'


function ImageCard({displayimage}) {
  console.log(displayimage);
  return (
    <>
    <Card style={{ width: '18rem',marginTop:'100px' }}>
      <Card.Img variant="top" src={displayimage?.ImageUrl} />
      <Card.Body>
        <Card.Title>{displayimage?.project}</Card.Title>
        <Card.Text>
        {displayimage?.year}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default ImageCard