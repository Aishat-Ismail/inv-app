import './Landing.css'
import checks from '../../assets/checks.png'
import invbg from '../../assets/invbg.png'
import Group from '../../assets/Group.svg'


import inve from '../../assets/inve.jpeg'

const About = () => {
    return (
        <>
            <div className='abt-main'>
                <div className='abt-one'>
                    <div className='abt-left'>
                        <h2 id='why'>Why choose Stockit?</h2>
                        <div className='abt-left-cont'>
                            <div className='abt-left-one'>
                                <img src={checks} alt="img" id='abtIcon' />
                                <div className='abt-left-texts'>
                                    <h2 id='abtH'>
                                        24/7 Accessibility

                                    </h2>
                                    <p id='abtP'>
                                        Stockit is accessible anytime, anywhere, as a cloud-based <br />
                                        platforms. Users can securely access the system and <br />
                                        and manage their inventory from any device, providing flexibility and convenience.

                                    </p>

                                </div>

                            </div>

                            <div className='abt-left-one'>
                                <img src={checks} alt="img" id='abtIcon' />
                                <div className='abt-left-texts'>
                                    <h2 id='abtH'>
                                        Streamlined Inventory Management

                                    </h2>
                                    <p id='abtP'>
                                        Stockit simplifies inventory management processes,<br /> allowing users to  efficiently track and manage their <br /> inventory in real-time. This leads to improved inventory <br /> accuracy, reduced stockouts, and optimized stock levels.

                                    </p>

                                </div>



                            </div>

                            <div className='abt-left-two'>
                                <img src={checks} alt="img" id='abtIcon' />
                                <div className='abt-left-texts'>

                                    <h2 id='abtH'>
                                        Scalability and Flexibility

                                    </h2>

                                    <p id='abtP'>
                                        Stockit is designed to scale with growing businesses. It <br /> accommodates increasing inventory volumes,
                                        supports <br /> multiple warehouses or locations, and adapts to changing <br /> business needs.
                                        Users can easily expand their operations <br /> without worrying about outgrowing the system.

                                    </p>

                                    <button type="button" id='seeM'> <a href="/signup"> See More</a>
                                       
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='abt-right'>
                        <div className='invD-cont'>
                            <img src={Group} alt="" id='invD' />
                        </div>

                    </div>

                </div>

                <div className='abt-two'>
                    <div className='abt-lefty'>
                        <div className='invD2-cont'>
                            <img src={Group} alt="" id='invD2' />
                        </div>

                    </div>
                    <div className='abt-righty'>
                        <div id='abt-right-texts' >
                            <h2 id='abtAb'>ABOUT US</h2>

                            <h1 id='abtH2'>Get to know us better</h1>

                            <p id='abtWe'>We are dedicated to providing innovative and reliable inventory <br /> management solutions that empower businesses to take control <br />
                                of their inventory, streamline operations, and achieve <br /> sustainable growth. With our cutting-edge technology and <br />
                                commitment to customer success, we are your trusted partner <br />
                                in optimizing inventory management for success in today's <br />competitive marketplace.
                            </p>

                            <button type="button" id='getS'><a href="/signup"> Get Started</a></button>

                        </div>

                    </div>


                </div>

            </div>


        </>
    )
}
export default About