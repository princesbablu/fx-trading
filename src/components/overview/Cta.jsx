import { Container, Row, Col } from 'react-bootstrap'

export default function Cta() {
    return (
        <div className='cta'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} xl={9} xxl={8}>
                        <div className="cta-wrap text-center">
                            <h2>Ready to Start?</h2>
                            <p>Lets start here. Join <strong>2.9M</strong> Fx users around the world!</p>
                            <a href="" target="_blank" rel="noopener noreferrer" className='btn'>Create account</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
