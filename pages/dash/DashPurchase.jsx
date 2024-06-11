import './Dashboard.css'

const DashPurchase =({purImg, purLeft, purRight, purP, purImg2, purLeft2, purRight2, purImg3, purLeft3, purRight3, purImg4, purLeft4, purRight4,})=>{
    return(

        <>
        <div className="dash-sales">
                <p id="sales-p">{purP}</p>
                <div className='sales-cont'>
                    <div className='sales-bot'>
                        <img src={purImg} alt="img" id='salesImg' />
                        <div className='sales-bots'>
                            <p id="sales-left">{purLeft}</p>
                            <p id="sales-right">{purRight}</p>
                        </div>

                    </div>
                    {/* <hr /> */}
                    <div id='diff'>

                    </div>
            
                    <div className='sales-bot'>
                        {/* <img src={salesImg} alt="img"  /> */}
                        <img src={purImg2} alt="" id='salesImg' />
                        <div className='sales-bots'>
                            <p id="sales-left">{purLeft2}</p>
                            <p id="sales-right">{purRight2}</p>
                        </div>

                    </div>
                    <div id='diff'>

                    </div>
                    <div className='sales-bot'>
                        {/* <img src={salesImg} alt="img"  /> */}
                        <img src={purImg3} alt="" id='salesImg' />
                        <div className='sales-bots'>
                            <p id="sales-left">{purLeft3}</p>
                            <p id="sales-right">{purRight3}</p>
                        </div>

                    </div>
                    <div id='diff'>

                    </div>
                    <div className='sales-bot'>
                        <img src={purImg4} alt="" id='salesImg' />
                        <div className='sales-bots'>
                            <p id="sales-left">{purLeft4}</p>
                            <p id="sales-right">{purRight4}</p>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}
export default DashPurchase