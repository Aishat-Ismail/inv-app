


import './Dashboard.css'

const DashSales = ({ salesImg, salesLeft, salesRight, salesP, salesImg2, salesLeft2, salesRight2, salesImg3, salesLeft3, salesRight3, salesImg4, salesLeft4, salesRight4, }) => {
    return (

        <>
            <div className="dash-sales">
                <p id="sales-p">{salesP}</p>
                <div className='sales-cont'>
                    <div className='sales-bot'>
                        <img src={salesImg} alt="img" id='salesImg' />
                        <div className='sales-bots'>
                            <p id="sales-left">{salesLeft}</p>
                            <p id="sales-right">{salesRight}</p>
                        </div>

                    </div>
                    {/* <hr /> */}
                    <div id='diff'>

                    </div>
            
                    <div className='sales-bot'>
                        {/* <img src={salesImg} alt="img"  /> */}
                        <img src={salesImg2} alt="" id='salesImg' />
                        <div className='sales-bots'>
                            <p id="sales-left">{salesLeft2}</p>
                            <p id="sales-right">{salesRight2}</p>
                        </div>

                    </div>
                    <div id='diff'>

                    </div>
                    <div className='sales-bot'>
                        {/* <img src={salesImg} alt="img"  /> */}
                        <img src={salesImg3} alt="" id='salesImg' />
                        <div className='sales-bots'>
                            <p id="sales-left">{salesLeft3}</p>
                            <p id="sales-right">{salesRight3}</p>
                        </div>

                    </div>
                    <div id='diff'>

                    </div>
                    <div className='sales-bot'>
                        <img src={salesImg4} alt="" id='salesImg' />
                        <div className='sales-bots'>
                            <p id="sales-left">{salesLeft4}</p>
                            <p id="sales-right">{salesRight4}</p>
                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}
export default DashSales