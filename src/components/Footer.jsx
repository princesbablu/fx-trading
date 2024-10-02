import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Social from './Social'
import visa from '../assets/img/visa.png'
import mastercard from '../assets/img/mastercard.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  const item = [
    {
      title: 'Trading',
      link: [
        { des: 'Stocks to buy' },
        { des: 'Hot assets' },
        { des: 'Stock CFDs' },
        { des: 'Cryptocurrencies' },
        { des: 'Forex' },
        { des: 'Metals' },
        { des: 'Indices' },
        { des: 'Agriculture' },
        { des: 'Oil and gas' },
        { des: 'ETFs' },
        { des: 'Bonds' },
        { des: 'Market news' },
      ]
    },
    {
      title: 'Trading info',
      link: [
        { des: 'Blog' },
        { des: 'News' },
        { des: 'Education' },
        { des: 'FAQ' },
        { des: 'Economic calendar' },
      ]
    },
    {
      title: 'Platforms',
      link: [
        { des: 'Libertex' },
        { des: 'MetaTrader 4' },
        { des: 'MetaTrader 5' },

      ]
    },
    {
      title: 'Bonuses',
      link: [
        { des: 'Welcome bonus' },
        { des: 'Loyalty programme' },
        { des: 'Crypto Mining' },
        { des: '' },
        { des: '' },
        { des: '' },
        { des: '' },
        { des: '' },
      ]
    },
    {
      title: 'Company',
      link: [
        { des: 'About Us',url:'about' },
        { des: 'Contacts', },
        { des: 'Partnership programme' },
        { des: 'IB programme' },
        { des: 'Sponsorship' },
        { des: 'Franchise' },
        { des: 'Fraud Warning' },
        { des: 'CFD Specification' },
        { des: 'Our features' },
        { des: 'Accounts overview' },
        { des: 'Careers' },
      ]
    },
    {
      title: 'Information',
      link: [
        { des: 'Legal' },
        { des: 'Help and support' },
        { des: 'Privacy policy' },
        { des: 'Sitemap' },
        { des: 'Security tips' },
        { des: 'Risk Warning' },
        { des: 'License and Regulation' },

      ]
    },
  ]
  return (
    <div className='footer'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} xl={10} xxl={8}>
            <div className="footer-wrap">
              <div className="footer-items d-flex justify-content-between flex-wrap flex-md-nowrap">
                {item.map((item, index) => (
                  <div className="footer-items-single" key={index}>
                    <h4 className='text-uppercase'>{item.title}</h4>
                    <ul>
                      {item.link.map((item, index) => (
                        <li key={index}><Link to={item.url} rel="">{item.des}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="footer-bottom d-md-flex justify-content-between">
                <div className="footer-bottom-des text-center text-md-start">
                  <p className='mb-34'>© 2024, Libertex <br />
                    Risk Warning: Trading in financial instruments is a risky activity and can bring not only profits, but
                    also losses. The amount of possible losses is limited by the amount of the deposit.</p>
                  <p className='mb-34'>Libertex is a trademark of Libertex International Company LLC. <br />
                    Libertex.org is operated by Forex Club International LLC, a company registered in St. Vincent and <br />
                    the Grenadines (Registration No. 1277 LLC 2021).<br />
                    The entity, which accepts payments from clients and transfers credit card payments back to<br />
                    clients, is Holcomb Finance Limited, a company registered in Cyprus (Kennedy, 12, KENNEDY<br />
                    BUSINESS CENTRE, Floor 2, 1087, Nicosia, Cyprus, Registration No. HE 183254).</p>
                  <p className='mb-34'>The affiliate programme is not permitted in Spain for the commercialisation of investment services
                    and client acquisitions by unauthorised third parties.</p>
                  <p className='mb-34'>The Company does not accept any customers from and does not operate in any of the following<br />
                    <a href="#" target='_blank'>restricted countries</a>
                    , such as: Russia, USA, Japan, Brazil and European Union; countries identified by
                    FATF as high risk and non-cooperative jurisdictions having strategic AML/CFT deficiencies; and
                    countries that are under international sanctions.
                  </p>
                  <p>Before opening an account with us, you should read the legal documents relating to the entity that
                    you're registering with. Please note that our legal documents vary depending on which entity you
                    hold your trading account with and the regulations that apply to you. The relevant entity is
                    determined based on your location and is stated in the footer of the application you register in.</p>
                </div>
                <div className="footer-social text-center">
                  <h3>Deposits and withdrawals</h3>
                  <div className="method">
                    <ul className='d-flex gap-2 justify-content-center'>
                      <li className='mr-4'><img src={visa} alt="" /></li>
                      <li><img src={mastercard} alt="" /></li>
                    </ul>
                  </div>
                  <div id="social">
                    <h3>Follow us:</h3>
                    <Social className='justify-content-center'/>
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
