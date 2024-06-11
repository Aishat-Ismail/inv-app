import './Dashboard.css'


const DashSummary = ({ sumP, sumImg, sumImg2, sumT, sumD, sumT2, sumD2 }) => {

    return (

        <>
            <div className='dash-summary'>
                <p id='sum-p'>{sumP}</p>
                <div className='sum-bot'>
                    <div className='sum-lefty'>
                        <img src={sumImg} alt='img' id='sumImg' />
                        <p id='sum-top'>{sumT}</p>
                        <p id='sum-down'>{sumD}</p>
                    </div>
                    <div id='siff'>

                    </div>
                    <div className='sum-righty'>
                        <img src={sumImg2} alt='' id='sumImg' />
                        <p id='sum-top2'>{sumT2}</p>
                        <p id='sum-down2'>{sumD2}</p>

                    </div>
                </div>
            </div>


        </>
    )

}
export default DashSummary