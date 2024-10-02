import { Link } from 'react-router-dom'
import Deposits from '../components/Paymentmethods/Deposits'
import { Container, Row, Col } from 'react-bootstrap'
import Withdrawals from '../components/Paymentmethods/Withdrawals'
export default function Payment() {
  return (
    <div className='payment'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} xl={10}>
            <ul className='breadcrump' id='nav'>
              <li><Link href="/">Home /</Link></li>
              <li> Company</li>
            </ul>
            <h1>Payment methods</h1>
            <div className="deposite">
              <h2 className='section-title'>Deposits</h2>
              <Deposits />
            </div>
            <div className="withdrawals mt-3 mt-md-5">
              <h2 className='section-title'>Withdrawals</h2>
              <Withdrawals />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
