
import './Dashboard.css'
import DashSales from './DashSales'
import DashPurchase from './DashPurchase.jsx'
import DashSummary from './DashSummary.jsx'
import ProductSum from './ProductSum.jsx'
import SellStock from './SellStock.jsx'
import LowQuantity from './LowQuantity.jsx'
import Sales from '../../assets/Sales.png'
import Revenue from '../../assets/Revenue.png'
import Profit from '../../assets/Profit.png'
import Purchase from '../../assets/Purchase.png'
import Cancel from '../../assets/Cancel.png'
import Cost from '../../assets/Cost.png'
import Quantity from '../../assets/Quantity.png'
import location from '../../assets/location.png'
import Suppliers from '../../assets/Suppliers.png'
import Categories from '../../assets/Categories.png'
import Calendar from '../../assets/Calendar.png'
import LaysOne from '../../assets/LaysOne.png'
import LaysTwo from '../../assets/LaysTwo.png'
import LaysThr from '../../assets/LaysThr.png'
import { BarChart, Area, AreaChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle, Legend, ResponsiveContainer } from 'recharts';



const aisha = [
    {
        name: 'Jan',
        sales: 50000,
        purchase: 55000,

    },
    {
        name: 'Feb',
        sales: 48000,
        purchase: 58000,

    },
    {
        name: 'Mar',
        sales: 53000,
        purchase: 45000,

    },
    {
        name: 'Apr',
        sales: 44000,
        purchase: 37000,
    },
    {
        name: 'May',
        sales: 45000,
        purchase: 43000,
    },
    {
        name: 'Jun',
        sales: 42000,
        purchase: 29000,
    },
    {
        name: 'Jul',
        sales: 50000,
        purchase: 55000,
    },
    {
        name: 'Aug',
        sales: 42000,
        purchase: 45000,
    },
    {
        name: 'Sep',
        sales: 43000,
        purchase: 45000,
    },


];


const data = [
    {
        "name": "Jan",
        "ordered": 4000,
        "delivered": 2400,

    },
    {
        "name": "Feb",
        "ordered": 3000,
        "delivered": 1398,

    },
    {
        "name": "Mar",
        "ordered": 2000,
        "delivered": 9800,

    },
    {
        "name": "Apr",
        "ordered": 2780,
        "delivered": 3908,

    },



];






const Dashboard = () => {
    const dashsale = [

        {
            salesP: 'Sales Overview',
            salesImg: Sales,
            salesLeft: '₦832',
            salesRight: 'Sales',
            salesImg2: Revenue,
            salesLeft2: '₦18,300',
            salesRight2: 'Revenue',
            salesImg3: Profit,
            salesLeft3: '₦808',
            salesRight3: 'Profit',
            salesImg4: Cost,
            salesLeft4: '₦17,432',
            salesRight4: 'Cost',

        },

    ];

    const dashpurchase = [

        {
            purP: 'Purchase Overview',
            purImg: Purchase,
            purLeft: '82',
            purRight: 'Purchase',
            purImg2: Cost,
            purLeft2: '₦13,573',
            purRight2: 'Cost',
            purImg3: Cancel,
            purLeft3: '5',
            purRight3: 'Cancel',
            purImg4: Profit,
            purLeft4: '₦17,432',
            purRight4: 'Return',
        },

    ];

    const dashsummary = [

        {
            sumP: 'Inventory Summary',
            sumImg: Quantity,
            sumT: '868',
            sumD: 'Quantity in Hand',
            sumImg2: location,
            sumT2: '200',
            sumD2: 'To be received'

        },
    ]

    const productsum = [

        {
            proP: 'Product Summary',
            proImg: Suppliers,
            proT: '31',
            proD: 'Quantity in stand',
            proImg2: Categories,
            proT2: '21',
            proD2: 'Number of Categories'

        },

    ];

    const sellstock = [
        {
            stk1: 'Name',
            stk2: 'Sold Quantity',
            stk3: 'Remaining Quantity',
            stk4: 'Price',
        },

        {
            stk1: 'Surf Excel',
            stk2: '30',
            stk3: '12',
            stk4: '₦100',
        },

        {
            stk1: 'Milo',
            stk2: '21',
            stk3: '15',
            stk4: '₦207',
        },

        {
            stk1: 'Parle G',
            stk2: '19',
            stk3: '17',
            stk4: '₦105',
        },

    ];

    const lowquantity = [
        {
            lqsImg: LaysOne,
            lqsP1: 'TaTa Salt',
            lqsP2: 'Remaining Quantity: 10 Packet',
            lqsBtn: 'Low',
        },

        {
            lqsImg: LaysTwo,
            lqsP1: 'Lays',
            lqsP2: 'Remaining Quantity: 15 Packet',
            lqsBtn: 'Low',

        },

        {
            lqsImg: LaysThr,
            lqsP1: 'Lays',
            lqsP2: 'Remaining Quantity: 15 Packet',
            lqsBtn: 'Low',
        }



    ]




    return (

        <>
            <div className="dash-main">
                <div className="dash-left">
                    <div className="dash-sales">


                        {dashsale.map((data, index) => {
                            return (<DashSales key={index} salesP={data.salesP} salesImg={data.salesImg} salesLeft={data.salesLeft} salesRight={data.salesRight}
                                salesImg2={data.salesImg2} salesLeft2={data.salesLeft2} salesRight2={data.salesRight2} salesImg3={data.salesImg3} salesLeft3={data.salesLeft3} salesRight3={data.salesRight3}
                                salesImg4={data.salesImg4} salesLeft4={data.salesLeft4} salesRight4={data.salesRight4} />)

                        })}

                    </div>

                    <div className="dash-sales">

                        {dashpurchase.map((data, index) => {
                            return (<DashPurchase key={index} purP={data.purP} purImg={data.purImg} purLeft={data.purLeft} purRight={data.purRight}
                                purImg2={data.purImg2} purLeft2={data.purLeft2} purRight2={data.purRight2} purImg3={data.purImg3} purLeft3={data.purLeft3} purRight3={data.purRight3}
                                purImg4={data.purImg4} purLeft4={data.purLeft4} purRight4={data.purRight4} />)
                        })}

                    </div>

                    <div className='sales-purchase'>
                        <div className='sales-pur-cont'>
                            <p id='snp'>Sales & Purchase</p>
                            <button type="button" id='snp-weekly'><img src={Calendar} alt="img" id='calendar' />Monthly</button>
                        </div>
                        <div className='sal-pur-graph'>
                            {/* <h3>GRAPH</h3> */}
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={aisha}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                    outerRadius={20}


                                    barCategoryGap={17}


                                >
                                    <CartesianGrid vertical={false} height='20' />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend iconType='circle' />
                                    <Bar dataKey="purchase" fill="#1570EF" radius={[20, 20, 0, 0]} activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                    <Bar dataKey="sales" fill="#51CC5D" radius={[20, 20, 0, 0]} activeBar={<Rectangle fill="gold" stroke="purple" />} />

                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                    </div>

                    <div className='top-sell-cont'>
                        <div className='top-sell-stk'>
                            <p id='tp-sell'>Top Selling Stock</p>
                            <p id='tp-all'>See All</p>
                        </div>
                        <div className='stock-table-cont'>
                            <table id='stock-table'>
                                {sellstock.map((data, index) => {
                                    return (<SellStock key={index} stk1={data.stk1} stk2={data.stk2} stk3={data.stk3} stk4={data.stk4} />)
                                })}

                            </table>

                        </div>

                    </div>


                </div>

                <div className="dash-right">
                    <div className='dash-summary'>

                        {dashsummary.map((data, index) => {
                            return (<DashSummary key={index} sumP={data.sumP} sumImg={data.sumImg} sumT={data.sumT} sumD={data.sumD} sumImg2={data.sumImg2} sumT2={data.sumT2} sumD2={data.sumD2} />)
                        })}



                    </div>

                    <div className='dash-summary'>

                        {productsum.map((data, index) => {
                            return (<ProductSum key={index} proP={data.proP} proImg={data.proImg} proT={data.proT} proD={data.proD} proImg2={data.proImg2} proT2={data.proT2} proD2={data.proD2} />)
                        })}



                    </div>

                    <div className='order-summary'>
                        <div className='order-sum-cont'>
                            <p id='ors'>Order Summary</p>
                        </div>
                        <div className='ord-sum-graph'>
                            {/* <h3>GRAPH</h3> */}
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart width={480} height={300} data={data}
                                    margin={{ top: 5, right: 15, left: 0, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="colorordered" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#DF9B2D" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#C5A674" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colordelivered" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid vertical={false} />
                                    <Tooltip />
                                    <Legend iconType='circle' />
                                    <Area type="monotone" dataKey="ordered" stroke="#DF9B2D" fillOpacity={1} fill="url(#colorordered)" />
                                    <Area type="monotone" dataKey="delivered" stroke="teal" fillOpacity={0} />
                                </AreaChart>

                            </ResponsiveContainer>
                        </div>

                    </div>

                    <div className='low-stock'>
                        <div className='lqsa-cont'>
                            <p id='lqs'>Low Quantity Stock</p>
                            <p id='lqsa'>See All</p>
                        </div>

                        <div className='lqsa-body'>

                            {lowquantity.map((data, index) => {
                                return (<LowQuantity key={index} lqsImg={data.lqsImg} lqsP1={data.lqsP1} lqsP2={data.lqsP2} lqsBtn={data.lqsBtn} />)
                            })}

                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}
export default Dashboard