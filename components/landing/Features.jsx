import FeatProps from './FeatProps'
import  './Landing.css'
import supply from "/src/assets/supply.png"
import bag from '../../assets/bag.png'
import dollar from '../../assets/dollar.png'
import cash from '../../assets/cash.png'
import grocery from '../../assets/grocery.png'
import smart from '../../assets/smart.png'
import store from '../../assets/store.png'
import complete from '../../assets/complete.png'









const Features = ()=>{
    const FeatureArray = [
        {
            image: complete,
            text1:"Supplier Management",
            text2:"Effective supplier management streamlines communication, enhances transparency and optimize the supply chain.",
            index:0
        },
        {
            image: bag,
            text1:"Product Management",
            text2:"Product management empowers businesses to effectively organize and track their product catalog, enabling streamlined inventory management.",
            index:1
        },
        {
            image: dollar,
            text1:"Sales Management",
            text2:"Sales management enables businesses to efficiently track and manage sales orders. streamline fufillment processes and enhance customer satisfaction.",
            index:2
        },
        {
            image: grocery,
            text1:"Purchase Management",
            text2:"Purchase management enables businesses to effectively manage the purchase of the goods and services that the business requires from suppliers and vendors. ",
            index:3
        },
        {
            image: smart,
            text1:"Inventory Management",
            text2:"Inventory management allows users to efficiently track and manage their inventory in real-time. This leads to improved inventory accuracy, reduced stockouts, and optimized stock levels.",
            index:4
        },
        {
            image: store,
            text1:"Store Management",
            text2:"Store management effectively control the process of keeping track of stock levels across stores. This can relate to both physical and ecommerce online stores.",
            index:5
        }
    ]
    return(

        <>
        <div className="feat-mains">
            <div className='featP-cont'>
                <p  id='featP1'>FEATURES</p>
                <h1 id='feat-h1'>
                    Take full control of your <span id='span-invt'>inventory</span>
                </h1>

                <p id='featP2'>Efficiently manage your inventory, boost productivity, and optimize profitability <br />
                with our powerful inventory management software.
                
                </p>
            </div>

            <div className="feats">
                {
                    FeatureArray.map((features)=>{
                      return <FeatProps key={features.index} src={features.image} text1={features.text1} text2={features.text2} ></FeatProps>
                    })
                }
            </div>

        </div>

        </>
    )
}
export default Features