import React, { useState } from 'react'
import { uploadenquiryApi } from './ServicesApi/AllApi'
import commonApi from './ServicesApi/CommonApi'

function ContactUs() {

const [uploadEnquiry,stuploadEnquiry] = useState({Name:"",Email:"",phone:"",Enquiry:""})

const handleupload = async()=>{
   const {Name,Email,phone,Enquiry} = uploadEnquiry
  if(Name && Email && phone && Enquiry) {
    const result = await uploadenquiryApi(uploadEnquiry)
console.log(result);

  }
  else{
    alert("Fill the form completly")
  }

}


  return (
    <>
    <br /><br />
    <div  className='container w-50 '>
        <form  action="">
            <div className='d-flex flex-column  p-5 w-75  ' style={{lineHeight:'40px'}}>
                <label htmlFor="">Name</label>
                <input value={uploadEnquiry.Name}onChange={e=>stuploadEnquiry({...uploadEnquiry,Name:e.target.value})} className='form-contro rounded border-1' type="text" />
                <label htmlFor="">Email Id</label>
                <input value={uploadEnquiry.Email}onChange={e=>stuploadEnquiry({...uploadEnquiry,Email:e.target.value})} className='form-contro rounded border-1' type="text" />
                <label htmlFor="">Phone Number</label>
                <input value={uploadEnquiry.phone}onChange={e=>stuploadEnquiry({...uploadEnquiry,phone:e.target.value})} className='form-contro rounded border-1' type="text" />
                <label htmlFor="">Enquiry</label>
                <textarea value={uploadEnquiry.Enquiry}onChange={e=>stuploadEnquiry({...uploadEnquiry,Enquiry:e.target.value})} className='form-contro rounded border-1' type="text" /> <br />

                <div style={{textAlign:'center'}} ><button onClick={handleupload} className='btn btn-primary'>Sumbit</button></div>
            </div>
        </form>
       
    </div>
    </>
  )
}

export default ContactUs