import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'

export default function Account() {
    return (
        <div className='account'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12}>
                        <div className="common-title text-center">
                            <h2>Account features</h2>
                        </div>
                    </Col>
                    <Col xs={12} xl={9} xxl={8}>
                        <div className="account-wrap">
                            <div id="table">
                                <div className="tr">
                                    <div className="th">

                                    </div>
                                    <div className="th">
                                        <img src={logo} alt="" />
                                        <h5>Portfolio</h5>
                                    </div>
                                    <div className="th">
                                        <img src={logo} alt="" />
                                        <h5>CFD</h5>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="td">
                                        <span>Purpose</span>
                                    </div>
                                    <div className="td text-center">
                                        <p>Long-term investment in stocks with zero commission</p>
                                    </div>
                                    <div className="td text-center">
                                        <p>Active trading with leverage on the most popular instruments: currencies, stock indices, cryptocurrencies, metals and more</p>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="td">
                                        <span>Yield</span>
                                    </div>
                                    <div className="td text-center">
                                        <p>Moderate</p>
                                    </div>
                                    <div className="td text-center">
                                        <p>High volatility</p>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="td">
                                        <span>Risk</span>
                                    </div>
                                    <div className="td text-center">
                                        <p>Low</p>
                                    </div>
                                    <div className="td text-center">
                                        <p>High</p>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="td">
                                        <span>Groups of instruments</span>
                                    </div>
                                    <div className="td text-center">
                                        <a href="#">Stocks,</a>
                                        <a href="#">ETFs</a>
                                    </div>
                                    <div className="td text-center">
                                    <a href="#">Forex,</a>
                                    <a href="#">cryptocurrencies,</a>
                                    <a href="#">stock indices,</a>
                                    <a href="#">agricultural,</a>
                                    <a href="#">commodities,</a>
                                    <a href="#">stocks,</a>
                                    <a href="#">metals,</a>
                                    <a href="#">oil,</a>
                                    <a href="#">and gas,</a>
                                    <a href="#">ETFs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
