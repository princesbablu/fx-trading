import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

export default function Banner() {
    return (
        <div className='banner'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <ul className='breadcrump' id='nav'>
                            <li><Link href="/">Home /</Link></li>
                            <li>Overview of accounts</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={10} xl={6}>
                        <div className="banner-content text-center">
                            <h1>Overview of accounts</h1>
                            <div className="d-flex flex-column pWrap">
                                <p><span>Libertex Portfolio</span> is a new kind of account on the Libertex
                                    platform that allows you to invest in stocks with zero <a href="#">swap</a> or &nbsp; 
                                    <a href="" target="_blank" rel="noopener noreferrer">commission fees</a>. It's the perfect account for investing. </p>
                                <p> <span>Libertex CFD </span>is a traditional trading account that lets you buy/sell
                                    cryptocurrencies, forex instruments, gold, oil and stock indices.
                                    The account lets you use a multiplier of 1 to 999 to increase your
                                    potential profit.</p>
                            </div>
                            <a href="#" className="btn">cREATE aCCOUNT</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
