import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import paymentIcon1 from '../../assets/img/paymenticons/paypal.svg'
import paymentIcon2 from '../../assets/img/paymenticons/card.svg'
import paymentIcon6 from '../../assets/img/paymenticons/skrill.svg'
import paymentIcon8 from '../../assets/img/paymenticons/bank.svg'
import paymentIcon13 from '../../assets/img/paymenticons/neteller.svg'
export default function Withdrawals() {
    const [activeKey, setActiveKey] = useState('0');

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    const paymentMethods = [

        {
            icon: paymentIcon8,
            type: "SEPA / International bank wire",
            fee: "Free",
            regulator: "The Central Bank of Cyprus",
            processTime: "Instant",
            description: `PayPal is a fast and secure method of funding your Libertex account via an eWallet. You can use a credit/ debit card or another payment method as a funding source, depending on your country.To open a PayPal account or for further information, please visit paypal.com.`,
        },

        {
            icon: paymentIcon1,
            type: "eWallet",
            fee: "Free",
            regulator: "The Commission de Surveillance du Secteur Financier (CSSF)",
            processTime: "Instant",
            description: `PayPal is a fast and secure method of funding your Libertex account via an eWallet. You can use a credit/ debit card or another payment method as a funding source, depending on your country.To open a PayPal account or for further information, please visit paypal.com.`,
        },
        {
            icon: paymentIcon2,
            type: "Credit/debit card",
            fee: "Free",
            regulator: "The Central Bank of Cyprus",
            processTime: "Instant",
            description: `PayPal is a fast and secure method of funding your Libertex account via an eWallet. You can use a credit/ debit card or another payment method as a funding source, depending on your country.To open a PayPal account or for further information, please visit paypal.com.`,
        },

        {
            icon: paymentIcon6,
            type: "eWallet",
            fee: "Free",
            regulator: "The Financial Conduct Authority (FCA)",
            processTime: "Instant",
            description: `PayPal is a fast and secure method of funding your Libertex account via an eWallet. You can use a credit/ debit card or another payment method as a funding source, depending on your country.To open a PayPal account or for further information, please visit paypal.com.`,
        },

        {
            icon: paymentIcon13,
            type: "eWallet",
            fee: "Free",
            regulator: "The Financial Conduct Authority (FCA)",
            processTime: "Instant",
            description: `PayPal is a fast and secure method of funding your Libertex account via an eWallet. You can use a credit/ debit card or another payment method as a funding source, depending on your country.To open a PayPal account or for further information, please visit paypal.com.`,
        },

    ];
    return (
        <div className="payment-table-wrapper">
            <div className="payment-table">
                <div className="table-head">
                    <thead className='w-100 d-block'>
                        <tr className='d-flex align-items-center justify-content-between'>
                            <th>Payment method</th>
                            <th>Type</th>
                            <th>Fee</th>
                            <th>Regulator</th>
                            <th>Process Time</th>
                        </tr>
                    </thead>
                </div>
                <Accordion activeKey={activeKey}>
                    {paymentMethods.map((method, index) => (
                        <Accordion.Item eventKey={String(index)} key={index}>
                            <Accordion.Header onClick={() => handleToggle(String(index))}>
                                <div className='single-item'><img src={method.icon} alt={method.title} />
                                    {method.title}</div>
                                <div className='single-item'>{method.type}</div>
                                <div className='single-item'>{method.fee}</div>
                                <div className='single-item'>{method.regulator}</div>
                                <div className='single-item'>{method.processTime}</div>
                            </Accordion.Header>
                            <Accordion.Body className='w-100'>
                                <p>{method.description}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
