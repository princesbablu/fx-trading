import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import play from '../../assets/img/playstor.svg'
import apple from '../../assets/img/applestor.svg'
import icon1 from '../../assets/img/service-icon-1.svg';
import icon2 from '../../assets/img/service-icon-2.svg';
import icon3 from '../../assets/img/service-icon-3.svg';
import icon4 from '../../assets/img/service-icon-4.svg';
import icon5 from '../../assets/img/service-icon-5.svg';
import icon6 from '../../assets/img/service-icon-6.svg';

export default function Service() {
    const serviceItem = [
        {
            icon: icon1,
            des: '3M+ clients worldwide',
        },
        {
            icon: icon2,
            des: 'Over 300 tradable assets',
        },
        {
            icon: icon3,
            des: '120+ countries covered',
        },
        {
            icon: icon4,
            des: 'Part of the Libertex Group with over 25 years in the market',
        },
        {
            icon: icon5,
            des: 'Over 40 international awards',
        },
        {
            icon: icon6,
            des: '700 employees',
        },
    ]
    return (
        <div className='service'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} xl={10} xxl={8}>
                        <Row>
                            <Col xs={12} xl={10}>
                                <div className="common-title mb-0 text-center text-md-start">
                                    <h2>Why Libertex is a trusted CFD and crypto broker</h2>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="service-wrap d-md-flex">
                                    <div className="service-wrap-left">
                                        <p className='fp text-center text-md-start'>Libertex broker has been operating since 1997. This
                                            international brand has acquired over 25 years of experience.
                                            Libertex customers come from 120 countries worldwide.
                                            During its operations, Libertex has won 40 international
                                            awards from financial magazines and institutions for its
                                            customer support quality and innovative tech solutions.</p>
                                        <div className="service-card">
                                            <div className="text d-flex justify-content-between align-items-center p-3">
                                                <div className="text-left">
                                                    <p className='pb-2'>Trade with</p>
                                                    <div className="Logo"><img src={logo} alt="" /></div>
                                                </div>
                                                <p>Official Online Trading Partner</p>
                                            </div>
                                            <div className="content d-flex justify-content-end">
                                                <ul>
                                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src={apple} alt="" /></a></li>
                                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src={play} alt="" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-wrap-right">
                                        <div className="items d-flex flex-wrap justify-content-between">
                                            {serviceItem.map((item, index) => (
                                                <div className="items-single" key={index}>
                                                    <div className="icon text-center">
                                                        <img src={item.icon} alt="" />
                                                    </div>
                                                        <p>{item.des}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
