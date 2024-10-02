import { Container, Row, Col } from 'react-bootstrap'

export default function Key() {
    const keyItem = [
        {
            title: 'No',
            link: 'fees for trades',
        },
        {
            title: 'No',
            link: 'swap fees',
        },
        {
            title: 'No',
            link: 'Margin Call or Stop Out',
        },
        {
            title: 'No',
            link: 'multiplier',
        },
        {
            title: 'No',
            link: 'forced Take Profit or Stop Loss',
        },
        {
            title: 'No',
            link: ' fees for inactivity',
        },
        {
            title: 'Get regular ',
            link: 'dividend payouts',
            p: "for companies' stocks right to your account"
        },
        {
            title: 'Investors can buy ',
            link: 'fractional shares,',
            p: 'as small as 0.01 shares',

        },
    ]
    return (
        <div className='key'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={10} lg={7} xl={6}>
                        <div className="common-title text-center">
                            <h2>Key benefits of a Libertex Portfolio account:</h2>
                        </div>
                    </Col>
                    <Col xs={12}  xl={11} xxl={8}>
                        <div className="key-wrap d-flex flex-wrap text-center justify-content-center justify-content-xxl-start">
                            {keyItem.map((item, index) => (
                                <div className="key-item" key={index}>
                                    <div className="icon">
                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.7823 29.7458C24.1461 29.7458 30.1157 23.7763 30.1157 16.4125C30.1157 9.04863 24.1461 3.0791 16.7823 3.0791C9.41851 3.0791 3.44897 9.04863 3.44897 16.4125C3.44897 23.7763 9.41851 29.7458 16.7823 29.7458Z" fill="#336E22" />
                                            <path d="M23.1416 10.8357C23.6441 10.2974 24.4878 10.2683 25.0261 10.7707C25.5645 11.2731 25.5935 12.1169 25.0911 12.6552L15.7578 22.6552C15.2703 23.1775 14.4578 23.2227 13.9153 22.7578L9.2486 18.7578C8.68949 18.2786 8.62475 17.4368 9.10398 16.8777C9.5832 16.3186 10.4249 16.2539 10.9841 16.7331L14.6803 19.9013L23.1416 10.8357Z" fill="#336E22" />
                                        </svg>
                                    </div>
                                    <div className="text">
                                        <p>{item.title}</p>
                                        <a href="" target="_blank" rel="noopener noreferrer">{item.link}</a>
                                        <p>{item.p} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
