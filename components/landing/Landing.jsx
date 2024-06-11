import './Landing.css'
import Top from '../../assets/Top.png'
import Features from './Features'
import About from './About'
import Login from '../../authentication/login/Login'
import Create from '../../authentication/create/CreateAccount'

const Landing = () => {
    return (

        <>
            <div className="land-main">
                <div className='land-head'>
                    <div className='land-img-cont'>
                        <h2 id='stock'>Stockit</h2>
                        {/* <img src={Top} alt="logo" id='land-logo' /> */}

                    </div>

                    <div className='head-mid'>
                        <a href="/" id='amid'>Home</a>
                        <a href="/" id='amid'>About</a>
                        <a href="/" id='amid'>Features</a>
                        <a href="/" id='amid' >Faq</a>
                    </div>

                    <button  id='get-btn'><a href="/login">Sign In </a></button>

                </div>

                <div className='land-text'>
                    <h1 id='land-heading'>The Easy Way To Manage Your <br />
                        Goods and Grow Your Business</h1>
                    <p id='landP'>
                        Supercharge your business operations and revolutionize inventory with <br />
                        Stockit. Seamlessly optimize stock levels, automate replenishment <br /> processes,
                        and drive profitability like never before.
                    </p>
                    <div className='get-btn-cont'>
                        <button type="button" id='sff-btn'><a href="/signup">Get Started</a></button>
                        <button type="button" id='lm-btn'> Learn More</button>
                    </div>
                </div>


            </div>
            <Features>
                
            </Features>

            <About/>


            {/* <div className=''>
                <img src="" alt="" />


            </div> */}
        </>
    )
}
export default Landing