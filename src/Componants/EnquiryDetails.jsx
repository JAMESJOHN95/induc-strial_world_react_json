
import React, { useEffect, useState } from 'react'
import { getEnquiryApi } from './ServicesApi/AllApi'

function EnquiryDetails() {

const [allEnquiry,setallEnquiry] = useState([])

const getalldata = async()=>{
  const result = await getEnquiryApi()
  console.log(result?.data);
  if(result?.status == 200){
    setallEnquiry(result?.data)
  }
}
useEffect(()=>{
getalldata()
},[])
console.log(allEnquiry);

  return (
    <div className='container'>
      <div style={{paddingTop: "100px"}} >
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Phone</th>
              <th>Enquiry</th>
            </tr>
          </thead>
          <tbody>
         { allEnquiry?.length>0? allEnquiry.map((item,index)=>(
        
            <tr key={index}>
              <td>{index+1} </td>
              <td>{item?.Name}</td>
              <td>{item?.Email}</td>
              <td>{item?.phone}</td>
              <td>{item?.Enquiry}</td>
            </tr>
         ))
          :
          <tr>Nothing to display</tr>
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EnquiryDetails