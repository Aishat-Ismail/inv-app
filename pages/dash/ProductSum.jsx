
import './Dashboard.css'
const ProductSum = ({ proP, proImg, proImg2, proT, proD, proT2, proD2 })=>{
    return(

        <>
        <div className='dash-summary'>
                <p id='sum-p'>{proP}</p>
                <div className='sum-bot'>
                    <div className='sum-lefty'>
                        <img src={proImg} alt='img' id='sumImg' />
                        <p id='sum-top'>{proT}</p>
                        <p id='sum-down'>{proD}</p>
                    </div>
                    <div id='siff'>

                    </div>
                    <div className='sum-righty'>
                        <img src={proImg2} alt='' id='sumImg' />
                        <p id='sum-top2'>{proT2}</p>
                        <p id='sum-down2'>{proD2}</p>

                    </div>
                </div>
            </div>

        </>
    )

}
export default ProductSum