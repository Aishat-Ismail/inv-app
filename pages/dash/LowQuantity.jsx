import './Dashboard.css'

const LowQuantity =({lqsImg, lqsP1, lqsP2, lqsBtn})=>{
    return(

        <>
        <div className='lqsa-mini'>
            <img src={lqsImg} alt="img" id='lqsImg' />
            <div className='lqsaP-cont'>
                <p id='lqsaP1'>{lqsP1}</p>
                <p id='lqsaP2'>{lqsP2}</p>
            </div>
            <button type="button" id='lqs-btn'>{lqsBtn}</button>

        </div>
        </>
    )
}
export default LowQuantity