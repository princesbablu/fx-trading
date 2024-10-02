import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../../assets/img/howto-img-1.png'
import img2 from '../../assets/img/howto-img-2.png'

export default function Howto() {
    const card = [
        {
            span: 'LESSON 1.',
            title: 'How to Trade in the Financial Markets',
            p: 'Many people think you need to have a professional financial background or a million dollars to tr',
            img: img1,
        },
        {
            span: 'LESSON 2.',
            title: 'How to Trade in the Financial Markets',
            p: 'Many people think you need to have a professional financial background or a million dollars to tr',
            img: img2,
        },
    ]
    return (
        <div className='how'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={10} xl={7} xxl={6}>
                        <div className="common-title text-center">
                            <h2>How to start <br /> Forex and CFD trading online</h2>
                            <p>Learn the basics of trading in this course developed by
                                our award-winning investment Academy</p>
                            <a href="" target="_blank" rel="noopener noreferrer" className='d-flex align-items-center justify-content-center'>All lessons
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_3926_5002" fill="white">
                                        <path d="M0.531006 7.10999L6.89497 0.74602L13.2589 7.10999L6.89497 13.474L0.531006 7.10999Z" />
                                    </mask>
                                    <path d="M13.2589 7.10999L13.966 7.81709L14.6732 7.10999L13.966 6.40288L13.2589 7.10999ZM6.18786 1.45313L12.5518 7.81709L13.966 6.40288L7.60208 0.038913L6.18786 1.45313ZM12.5518 6.40288L6.18786 12.7668L7.60208 14.1811L13.966 7.81709L12.5518 6.40288Z" fill="#FF6633" mask="url(#path-1-inside-1_3926_5002)" />
                                </svg>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    {card.map((item, index) => (
                        <Col xs={12} md={6} xl={4} key={index}>
                            <div className="how-card">
                                <div className="img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="text">
                                    <span>{item.span}</span>
                                    <h4>{item.title} </h4>
                                    <p>{item.p} </p>
                                </div>
                            </div>
                        </Col>
                    ))}
                    <Col xs={12}>
                        <div className="how-btn d-flex justify-content-center flex-column align-items-center">
                            <a href="http://" className='btn' target="_blank" rel="noopener noreferrer">Start trading now</a>
                            <h6>or</h6>
                            <a href="http://" className='demo' target="_blank" rel="noopener noreferrer">practice on a demo account</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
