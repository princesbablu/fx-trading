import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TradLeft from './home/TradLeft'


export default function Trading() {
    const value = [
        {
            title: "Spreads from 0.00",
        },
        {
            title: "Up to 1:999 leverage",
        },
    ]
    return (
        <div className='trading'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} lg={10}>
                        <div className="trading-area  d-md-flex   justify-content-between">
                            <div className="trading-area-card w-100 mb-4 mb-md-0">
                                <h2 className='mb-4 pb-md-2 pb-lg-3 fw-bold'>Trading Assets</h2>
                                <TradLeft />
                            </div>
                            <div className="trading-area-text ">
                                <p className='text-title fw-bold'>2 more reasons to tradewith Libertex:</p>
                                <div className="value-item">
                                    <ul>
                                        {
                                            value.map((item, idx) => (
                                                <li className='d-flex align-items-center gap-2' key={idx}>
                                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_3926_4890)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.04654 11.3951L1.87654 7.22507L0.456543 8.63507L6.04654 14.2251L18.0465 2.22507L16.6365 0.815063L6.04654 11.3951Z" fill="#EF7C46" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3926_4890">
                                                                <rect width="18" height="14" fill="white" transform="translate(0.0466309 0.225098)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    {item.title}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="value-card text-center ">
                                    <p className='mb-3 mb-lg-4'>Learn about <span>our features</span></p>
                                    <p className='mb-3 pb-lg-3 des'>FX hasbeen operating since 1997.</p>
                                    <Link to="/" className=' fw-medium d-flex align-items-center justify-content-center gap-2  d-block mx-auto '>Read more
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.04077 11.2551L9.09411 8.19507L6.04077 5.13507L6.98077 4.19507L10.9808 8.19507L6.98077 12.1951L6.04077 11.2551Z" fill="#161616" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
