import React from 'react'
import { Card } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'


function Landing() {
    const Navigate = useNavigate()


    const handleNavigate = () => {
        Navigate('/Gallery')
    }

    return (
        <>
            <div>
                <div className="row p-3">
                    <div className="col-lg-8 p-5">
                        <h1>WELCOME TO INDUSTRIAL WORLD</h1>
                        <p>We have pleasure in introducing ourselves as a leading multi discipline Industrial Construction
                            Company in India with Rs. 1935 Crore financial turnover for March ending 2019.
                            We are an ISO 9001-2008 and OHSAS 18001: 2007 accredited company. Our major activities include:</p>

                        <p><span>Mechanical Construction</span>: Piping and Equipment Erection for Refineries, Petrochemical,
                            Chemical,
                            Fertilizers & Power plants.</p>
                        <p><span>Tankages</span>: (Fixed, Floating and Dome Roof): Design Engineering construction of Crude Oil
                            & Petroleum
                            product Tank farms.
                        </p>
                        <p><span>Fire Protection Systems</span>: Design and Engineering, Supply, Installation, Testing and
                            Commissioning of
                            Fire Protection Systems including Hydrant, Sprinklers, Spray, Foam, Gas Suppression and Fire Alarm
                            Systems on Turnkey Basis for Semi and High Hazard Occupancies in Industrial plants, Commercial/
                            Administrative Buildings.</p>
                        <p><span>Pipelines</span>: Cross Country Pipelines for Oil & Gas and Water including Water Distribution
                            Systems</p>
                        <p>
                            <span>Civil and Structural Works</span>: Civil Construction, Fabrication and Erection of Structural
                            Steel for
                            Petroleum Refineries. Under Ground water reservoirs, Intake wells and Large piped Irrigation
                            projects.
                        </p>
                        <p>Our prestigious clients are Multinational Industrial giants and their subsidiaries viz. Cairn Energy,
                            Shell, British Gas, Sterlite Industries, Wartsila, BASF, Dow Chemicals, etc and Indian majors like
                            Indian Oil, Gas Authority Of India, Hindustan Petroleum, HMEL, MRPL, Bharat Petroleum, Birlas, GNFC,
                            Jindal, TATA Power & all Government Departments like PWD, CPWD, PHED, MES etc.</p>
                    </div>
                    <div className="col-lg-4">
                        <img style={{width:'100%',height:'550px'}} className='p-3' src="https://www.wbcsd.org/var/site/storage/images/overview/news-insights/wbcsd-insights/future-proofing-light-industry-with-renewable-heat/224061-1-eng-GB/Future-proofing-light-industry-with-renewable-heat_i1140.jpg" />
                    </div>

                </div>
            </div>

            <div className="row ms-5 mb-5">
                <div style={{ textAlign: 'center', fontWeight: '800' }} ><h1>OUR SERVICES</h1></div>
                <div className="col-lg-4 md-6 ">
                    <Card style={{ width: '300px', textDecoration: 'none' }}>
                        <Card.Img style={{ height: '200px' }} variant="top" src="https://static.wixstatic.com/media/4dbec6_0cfe4b96bf2c4536b11b0ac0057f3d42~mv2.jpg/v1/fit/w_1000%2Ch_900%2Cal_c%2Cq_80,enc_auto/file.jpg" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center', fontWeight: '700' }}>PIPPING</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 md-6">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '200px' }} variant="top" src="https://5.imimg.com/data5/SELLER/Default/2024/1/373889143/KH/BH/SO/154984029/mechanical-structural-design-solution.jpg" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center', fontWeight: '700' }}>STRUCTURE</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 md-6">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '200px' }} variant="top" src="https://www.gsctanks.com/wp-content/uploads/2018/11/shutterstock_264967397.jpg" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center', fontWeight: '700' }}>TANK</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div style={{ textAlign: 'center' }} >
                <button onClick={handleNavigate} style={{ color: 'white', fontWeight: '500', border: 'none', width: '100px' }} className='rounded bg-primary p-2'>Gallery</button>               </div>

        </>
    )
}

export default Landing