import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import icon1 from '../../assets/img/service-icon-1.svg';
import icon2 from '../../assets/img/service-icon-2.svg';
import icon3 from '../../assets/img/service-icon-3.svg';
import icon4 from '../../assets/img/service-icon-4.svg';
import icon5 from '../../assets/img/service-icon-5.svg';
import icon6 from '../../assets/img/service-icon-6.svg';

export default function Service2() {
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
        <div className='service py-0'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} xl={10} xxl={8}>
                        <ul className='breadcrump' id='nav'>
                            <li><Link href="/">Home /</Link></li>
                            <li> Company</li>
                        </ul>
                        <Row>
                            <Col xs={12} xl={10}>
                                <div className="common-title  text-center text-md-start">
                                    <h2>Experience backed by history</h2>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="service-wrap d-md-flex">
                                    <div className="service-wrap-left">
                                        <p className='fp text-center text-md-start'>Part of the Fx Group, Fx is an online broker
                                            offering tradable CFDs with underlying assets being
                                            commodities, Forex, ETFs, cryptocurrencies, and others.
                                            Fx also offers commission-free investments in real
                                            stocks.</p>
                                        <p className='fp text-center text-md-start'>Over the years, Fx has received more than 40
                                            prestigious international awards and recognitions, including
                                            “Most Trusted Broker LATAM” (Ultimate Fintech Awards, 2022)
                                            and "Best Trading Platform" (FX Report Awards, 2022). </p>
                                        <p className='fp text-center text-md-start'>Since being founded in 1997, the Fx Group has grown
                                            into a diverse group of companies, serving millions of clients
                                            from several countries all over the world. </p>

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
