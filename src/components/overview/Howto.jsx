import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../../assets/img/overview/how-img-1.png'

export default function Howto() {
    return (
        <div className='how'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={8} xl={5}>
                        <div className="common-title text-center">
                            <h2>How to open a Libertex Portfolio account</h2>
                        </div>
                        <ul id='ul' className='justify-content-center d-flex gap-3 gap-xl-4'>
                            <li><button className='active p-0 border-0 bg-transparent'>New clients</button></li>
                            <li><button className=' p-0 border-0 bg-transparent'>Existing clients</button></li>
                        </ul>
                    </Col>
                    <Col xs={12} xl={9} xxl={8}>
                        <div className="how-wrap d-md-flex align-items-center justify-content-between">
                            <div className="text text-center">
                                <h3>For new clients</h3>
                                <p>Sign up and select the corresponding account type during the process.</p>
                            </div>
                            <div className="img">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
