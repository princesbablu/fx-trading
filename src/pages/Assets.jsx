import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import TradLeft from "../components/home/TradLeft"
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

export default function Trad() {
    const topic = [
        {
            name: 'Hot assets',
            value: 'assets'
        },
        {
            name: 'Stocks',
            value: 'stocks'
        },
        {
            name: 'Crypto',
            value: ''
        },
        {
            name: 'Forex',
            value: ''
        },
        {
            name: 'Metals',
            value: ''
        },
        {
            name: 'Indices',
            value: ''
        },
        {
            name: 'Agriculture',
            value: ''
        },
        {
            name: 'Oil and gas',
            value: ''
        },
        {
            name: 'ETFs',
            value: ''
        },
        {
            name: 'Bonds',
            value: ''
        },
    ]
    return (
        <div className='trad trading'>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} xl={10} xxl={8}>
                        <ul className='breadcrump' id='nav'>
                            <li><Link href="/">Home /</Link></li>
                            <li>Trading</li>
                        </ul>
                        <Row>
                            <Col xs={12}>
                                <div className="common-title  text-center text-md-start">
                                    <h2 className="mb-3">Hot assets</h2>
                                    <p>Take a look at the most popular assets on the Libertex trading platform. Traders choose these due to
                                        volatility and profit potential. Choose one and start trading it right away.</p>
                                </div>
                            </Col>
                        </Row>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="assets">
                            <Row className="flex-column-reverse flex-md-row">
                                <Col xs={12} md={10}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="assets">
                                            <div className="trading-area-card">
                                                <TradLeft />
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="stocks">Second tab content</Tab.Pane>
                                    </Tab.Content>
                                </Col>
                                <Col xs={12} md={2}>
                                    <Nav variant="pills" className="flex-nowrap flex-md-wrap flex-md-column overflow-auto">
                                        {topic.map((item, index) => (
                                            <Nav.Item key={index}>
                                                <Nav.Link eventKey={`${item.value}`}>{item.name}</Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
