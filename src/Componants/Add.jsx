import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { uploadImageApi } from './ServicesApi/AllApi';


function Add({SetUploadImageResponse}) {
  const [uploadimage, setuploadimage] = useState({ project: "", ImageUrl: "", year: "" })
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setuploadimage({ ...uploadimage, project: "", ImageUrl: "", year: "" })
  }
  
  const handleShow = () => setShow(true);
  // console.log(uploadImageApi);

  const handleaddimage = async () => {
    const { project, ImageUrl, year } = uploadimage
    if (project && ImageUrl && year) {
      const result = await uploadImageApi(uploadimage)
      console.log(result);
    
    if (result.status >= 200 && result.status < 300) {
      alert(`Project ${uploadimage.project} is succesfull`)
      SetUploadImageResponse(result.data)
      handleClose()
    }
    else {
      alert("video is not uploaded")
    } 
    }
else {
    alert("Please fill the form completely")
  }
}

return (
  <>
    <button onClick={handleShow} style={{ border: 'none', borderRadius: '15px', width: '100px', color: 'white' }} className='me-5 p-2 bg-primary'>ADD</button>

    {/* ******************************************Modal *************************************************************************** */}



    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-column'>
          <div className='mb-3  rounded'> <input value={uploadimage.ImageUrl} onChange={e=>setuploadimage({...uploadimage,ImageUrl:e.target.value})} className='form-control rounded' type="text" placeholder='Image Url' /></div>
          <div className='mb-3 '><input value={uploadimage.project} onChange={e=>setuploadimage({...uploadimage,project:e.target.value})} className='form-control rounded' type="text" placeholder='Project' /></div>
          <div className='mb-3 '><input value={uploadimage.year} onChange={e=>setuploadimage({...uploadimage,year:e.target.value})} className='form-control rounded' type="text" placeholder='Year' /></div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleaddimage}>Add</Button>
      </Modal.Footer>
    </Modal>
  </>
)
}

export default Add