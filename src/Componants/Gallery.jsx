import React, { useState } from 'react'
import View from './View'
import { Row,Col } from 'react-bootstrap'
import Add from './Add'
import { Link } from 'react-router-dom'


function Gallery() {
  const [uploadImageResponse,SetUploadImageResponse] = useState("")
  return (
    <>
   <Row  className='container mb-5'>
    <Col>
    <View uploadImageResponse={uploadImageResponse}/>
    </Col>

   </Row >
   <div style={{textAlign:'center'}} className='d-flex justify-content-around'>
    <Add SetUploadImageResponse={SetUploadImageResponse} />
    <Link to= {'/'}><button style={{border:'none', borderRadius:'15px',width:'150px',color:'white'}} className='p-2 bg-primary'>BACK TO HOME</button></Link>
    </div>
    </>
  )
}

export default Gallery