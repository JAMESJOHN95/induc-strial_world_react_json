import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="row mt-2 ">
                <div className="col-lg-4 p-5">
                    <h1>Industrial World</h1>
                    <p>Industrial World is a medium sized, fast growing, multi disciplinary engineering Construction Company.</p>

                </div>
                <div className="col-lg-4 p-5">
                    <h4 >Easy Links</h4>
                   <div className='d-flex flex-column'>
                        <Link style={{textDecoration:'none'}}  className='me-3 fw-medium' to={'/'} >Home</Link>
                        <Link style={{textDecoration:'none'}} className='me-3 fw-medium' to={'/Gallery'} >Gallery</Link>
                        <Link style={{textDecoration:'none'}} to={'/ContactUs'} className='me-3 fw-medium' >Contact Us</Link>
                        <Link style={{textDecoration:'none'}} to={'/EnquiryDetails'} className='me-3 fw-medium' >EnquiryDetails</Link>
                   </div>


                </div>
                <div className="col-lg-4 p-5">
                    <h4>Informations</h4>
                    <div className="d-flex"><i className="fa-regular fa-map-location-dot"></i><p style={{ lineheight: '20px', color: ' Black' }}>22,Udyog Kshetra,Mulund Link Road, Mumbai-400 080INDIA</p></div>
                    <div className="d-flex"><i className="fa-regular fa-phone"></i><p style={{ color: ' Black' }}>+91 22-66721000</p>
                    </div>
                    <div className="d-flex"> <i className="fa-solid fa-fax"></i><p style={{ color: ' Black' }}>+91 22-66721000</p>
                    </div>
                    <div className="d-flex"> <i className="fa-regular fa-envelope"></i><p style={{ color: ' Black' }}>info@industrialworld.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer