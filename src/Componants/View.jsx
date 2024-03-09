import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import { Row,Col } from 'react-bootstrap'
import { getImageApi } from './ServicesApi/AllApi'

function View({uploadImageResponse}) {
  const [allimages,setallimages] = useState([])

    const getAllImage = async ()=>{
        const result = await getImageApi()
        if(result?.status == 200){
            setallimages(result?.data)
        }
    }
    useEffect(()=>{
      getAllImage()
    },[uploadImageResponse])
    console.log(allimages);

  return (
    <>
    <Row>
        {allimages?.length>0?allimages.map((image,index)=>
        (
        <Col sm={12} md={6} lg={3} key ={index}> 
        <ImageCard displayimage = {image} />
        </Col>))
        :
        <div>No content to display</div>
          }
    </Row>
    
    </>
  )
}

export default View