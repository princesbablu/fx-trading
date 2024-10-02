import React from 'react'

export default function TradLeft() {

    const carditem = [
        {
            title: "Bitcoin",
            subtitle: "56614.75",
            des: "-2.70%"
        },
        {
            title: "US DJ 30",
            subtitle: "40952",
            des: "-0.19%"
        },
        {
            title: "GBP/USD",
            subtitle: "31122",
            des: "-0.01%"
        },
        {
            title: "EUR/USD",
            subtitle: "1.10441",
            des: "0.01%"
        },
        {
            title: "US NDAQ 100",
            subtitle: "18876.25",
            des: "-0.62%"
        },
        {
            title: "Gold",
            subtitle: "2486.58",
            des: "-0.26%"
        },
        {
            title: "Brent Crude Oil",
            subtitle: "73.6",
            des: "-0.08%"
        },
        {
            title: "AUD/USD",
            subtitle: "0.67137",
            des: "0.03%"
        },
        {
            title: "USD/JPY",
            subtitle: "145.16",
            des: "-0.22%"
        },
        {
            title: "iShares Bitcoin Trust ETF",
            subtitle: "32.98",
            des: "-1.43%"
        },
    ]
    return (
        <div className='table-content'>
            <div className="overflow-md-hidden table-radius">
                {carditem.map((item, idx) => (
                    <div className={` ${idx % 2 == 0 ? "bgcolor" : "bg-white"}  table-area  d-flex align-items-center justify-content-between `} key={idx} >
                        <p className='title'>{item.title}</p>
                        <div className="d-flex align-items-center table-b">
                            <div className='d-flex align-items-center values'>
                                <p className='des'>{item.subtitle}</p>
                                <p className=' subtitle'>{item.des}%</p>
                            </div>
                            <div className='btns d-flex align-items-center gap-2'>
                                <button className='border-none fw-medium'>Buy</button>
                                <button className='border-none fw-medium sell'>Sell</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
