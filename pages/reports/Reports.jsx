import Calendar from '../../assets/Calendar.png'
import './Reports.css'
import RepTable from './RepTable'
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        "name": "Jan",
        "revenue": 4000,
        "profit": 2400,

    },
    {
        "name": "Feb",
        "revenue": 3000,
        "profit": 1398,

    },
    {
        "name": "Mar",
        "revenue": 2000,
        "profit": 9800,

    },
    {
        "name": "Apr",
        "revenue": 2780,
        "profit": 3908,

    },
    {
        "name": "May",
        "revenue": 2780,
        "profit": 3908,

    },
    {
        "name": "Jun",
        "revenue": 2780,
        "profit": 3908,

    },
    {
        "name": "Jul",
        "revenue": 2780,
        "profit": 3908,

    },
    {
        "name": "Aug",
        "revenue": 2780,
        "profit": 3908,

    },
    {
        "name": "Sep",
        "revenue": 2780,
        "profit": 3908,

    },
    {
        "name": "Oct",
        "revenue": 2780,
        "profit": 3908,

    },
    {
        "name": "Nov",
        "revenue": 2780,
        "profit": 3908,

    },
    {
        "name": "Dec",
        "revenue": 2780,
        "profit": 3908,

    },




]

const Reports = () => {
    const reptable = [
        // {
        //     rtp1: 'Product',
        //     rtp2: 'Product ID',
        //     rtp3: 'Category',
        //     rtp4: 'Remaining Quantity',
        //     rtp5: 'Turn Over',
        //     rtp6: 'Increase By',

        // },

        {
            rtp1: 'Tomato',
            rtp2: '24434',
            rtp3: 'Vegetable',
            rtp4: '25 Kg',
            rtp5: '₦17,000',
            rtp6: '2.3%',

        },

        {
            rtp1: 'Sugar',
            rtp2: '24434',
            rtp3: 'Household',
            rtp4: '300 Packets',
            rtp5: '₦50,000',
            rtp6: '1.3%',

        },

        {
            rtp1: 'Onions',
            rtp2: '24434',
            rtp3: 'Vegetable',
            rtp4: '250 Kg',
            rtp5: '₦30,000',
            rtp6: '1.3%',

        },

        {
            rtp1: 'Maggi',
            rtp2: '24434',
            rtp3: 'Instant Food',
            rtp4: '250 Packets',
            rtp5: '₦150,000',
            rtp6: '1%',

        },
    ];



    return (

        <>
            <div className="repo-main">
                <div className="repo-top">
                    <div className="repo-top-left">
                        <div className='rtl-head'>
                            <p id='rtlP'>Overview</p>
                        </div>

                        <div className='repo-body'>
                            <div className='rb-up'>
                                <div className='rbu1'>
                                    <p id='rbup1'>₦25,000</p>
                                    <p id='rbup2'>Total profit</p>

                                </div>
                                <div className='rbu1'>
                                    <p id='rbup1'>18,300</p>
                                    <p id='rbup2'>Revenue</p>


                                </div>
                                <div className='rbu1'>
                                    <p id='rbup1'>₦14,403</p>
                                    <p id='rbup2'>Sales</p>


                                </div>

                            </div>
                            <div id='ropf'>

                            </div>
                            <div className='rb-down'>
                                <div className='rbd1'>
                                    <p id='rbdp1'>₦171,403</p>
                                    <p id='rbdp2'>Net purchase value</p>

                                </div>
                                <div className='rbd1'>
                                    <p id='rbdp1'>₦80,432</p>
                                    <p id='rbdp2'>Net sales value</p>

                                </div>
                                <div className='rbd1'>
                                    <p id='rbdp1'>₦30,432</p>
                                    <p id='rbdp2'>MoM profit</p>

                                </div>
                                <div className='rbd1'>
                                    <p id='rbdp1'>₦110,432</p>
                                    <p id='rbdp2'>YoY profit</p>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="repo-top-right">
                        <div className='rtr-head'>
                            <p id='rtrP'>Best Selling Category</p>
                            <p id='rtrP2'>See All</p>
                        </div>
                        <div className='table-body'>
                            <table className='tabili'>
                                <tr id='tre'>
                                    <td>Category</td>
                                    <td>Turnover</td>
                                    <td>Increase</td>
                                </tr>

                                <tr id='tre'>
                                    <td>Vegetable</td>
                                    <td>₦26,000</td>
                                    <td id='gre'>3.2%</td>
                                </tr>

                                <tr id='tre'>
                                    <td>Instant Food</td>
                                    <td>₦22,000</td>
                                    <td id='gre'>2%</td>
                                </tr>

                                <tr>
                                    <td>Households</td>
                                    <td>₦22,000</td>
                                    <td id='gre'>1.5%</td>
                                </tr>

                            </table>
                        </div>

                    </div>
                </div>

                <div className="repo-mid">
                    <div className="repo-mid-head">
                        <p id='rmhP'>Profit & Revenue</p>
                        <button type="button" id='snp-weekly'><img src={Calendar} alt="img" id='calendar' />Monthly</button>

                    </div>
                    <div className='repo-mid-graph'>
                        {/* <h2>Graph</h2> */}
                        <ResponsiveContainer width='100%' height='100%'>
                            <AreaChart width={1200} height={470} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorrevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#DF9B2D" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#C5A674" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorprofit" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid vertical={false} />
                                <Tooltip />
                                <Legend iconType='circle' />
                                <Area type="monotone" dataKey="revenue" stroke="#DF9B2D" fillOpacity={1} fill="url(#colorrevenue)" />
                                <Area type="monotone" dataKey="profit" stroke="teal" fillOpacity={0} />
                            </AreaChart>
                        </ResponsiveContainer>


                    </div>

                </div>
                <div className="repo-bot">
                    <div className="repo-bot-head">
                        <p id='rbhP'>Best Selling Product</p>
                        <p id='rbhP2'>See All</p>

                    </div>
                    <div className='repo-bot-table'>
                        <table className='repo-tabili'>
                            <tr id='rtp-rows'>
                                <td id='rtps'>Product</td>
                                <td id='rtps'>Product ID</td>
                                <td id='rtps'>Categories</td>
                                <td id='rtps'>Remaining Quantity</td>
                                <td id='rtps'>Turnover</td>
                                <td id='rtps'>Increase By</td>
                            </tr>

                            {reptable.map((data, index) => {
                                return (<RepTable key={index} rtp1={data.rtp1} rtp2={data.rtp2} rtp3={data.rtp3} rtp4={data.rtp4} rtp5={data.rtp5} rtp6={data.rtp6} />)
                            })}


                        </table>
                    </div>


                </div>

            </div>
        </>
    )
}
export default Reports