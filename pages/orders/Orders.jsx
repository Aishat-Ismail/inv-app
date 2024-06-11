import './Orders.css'
import Order from './Order'
import OrderT from './OrderT'
import Filters from '../../assets/Filters.png'
import AddOrders from './AddOrders'
import { useState } from 'react'

const Orders = ({ShowAddOrd}) => {
    const [modalShow, setModalShow] = useState(false)

    const openModal = () =>{
        setModalShow(true)
    }

    const closeModal = () =>{
        setModalShow(false)
    }

    const togglePage = ()=>{
        ShowAddOrd((previousState) => !previousState)
    }



    const order = [
        {
            ord1: 'Total Received',
            ord2: '32',
            ord3: '₦25,000',
            ord4: 'Last 7 days',
            ord5: 'Revenue',
        },

        {
            ord1: 'Total Returned',
            ord2: '5',
            ord3: '₦2,500',
            ord4: 'Last 7 days',
            ord5: 'Cost',
        },

        {
            ord1: 'On the Way',
            ord2: '12',
            ord3: '₦2,326',
            ord4: 'Ordered',
            ord5: 'Cost',
        },


    ]

    const orders = [
        {
            ords1: 'Produts',
            ords2: 'Order Value',
            ords3: 'Quantity',
            ords4: 'Order ID',
            ords5: 'Expected Delivery',
            ords6: 'Status',

        },

        {
            ords1: 'Maggi',
            ords2: '₦4,300',
            ords3: '22 Packets',
            ords4: '5724',
            ords5: '16/4/24',
            ords6: 'Delayed',

        },

        {
            ords1: 'Bru',
            ords2: '₦4,300',
            ords3: '22 Packets',
            ords4: '6724',
            ords5: '16/4/24',
            ords6: 'Confirmed',

        },

        {
            ords1: 'Red Bull',
            ords2: '₦4,300',
            ords3: '22 Packets',
            ords4: '5324',
            ords5: '16/4/24',
            ords6: 'Returned',

        },

        {
            ords1: 'Bournvita',
            ords2: '₦4,300',
            ords3: '22 Packets',
            ords4: '5734',
            ords5: '16/4/24',
            ords6: 'Out for Delivery',

        },

        {
            ords1: 'Horlicks',
            ords2: '₦4,300',
            ords3: '22 Packets',
            ords4: '5224',
            ords5: '16/4/24',
            ords6: 'Returned',

        },

        {
            ords1: 'Harpic',
            ords2: '₦4,300',
            ords3: '22 Packets',
            ords4: '5724',
            ords5: '16/4/24',
            ords6: 'Out for Delivery',

        },

        {
            ords1: 'Ariel',
            ords2: '₦4,300',
            ords3: '22 Packets',
            ords4: '5724',
            ords5: '16/4/24',
            ords6: 'Delayed',

        },

        {
            ords1: 'Coca Cola',
            ords2: '₦4,300',
            ords3: '22 Packets',
            ords4: '5729',
            ords5: '16/4/24',
            ords6: 'Confirmed',

        },

        {
            ords1: 'Pepsi',
            ords2: '₦4,300',
            ords3: '22 Packets',
            ords4: '5727',
            ords5: '16/4/24',
            ords6: 'Delayed',

        },
    ]

    return (

        <>
        <div className='orders-pos' style={{position: 'relative'}}>
            {modalShow && <AddOrders/>}
        <div className='over-mains'>
                <div className='over-ord-up'>

                    <div className='over-ordP-cont'>

                        <p id='over-ordP'>Overall Orders</p>

                    </div>

                    <div className='over-ord-down'>
                        <div className='col1'>
                            <p id='ovp1'>Total Orders</p>
                            <p id='ovp2'>37</p>
                            <p id='ovp3'>Last 7 days</p>

                        </div>
                        
                        {order.map((data, index) => {
                            return (<Order key={index} ord1={data.ord1} ord2={data.ord2} ord3={data.ord3} ord4={data.ord4} ord5={data.ord5} />)
                        })}

                    </div>

                </div>

                <div className="orders-main">
                    <div className="orders-top">
                        <p id='ordsP'>Orders</p>
                        <div className="ord-btn-cont">
                            <button type="button" id="obc1" onClick={openModal}>Add Product</button>
                            <button type="button" id="obc2"> <img src={Filters} alt="img" id='supImg' />Filters</button>
                            <button type="button" id="obc3">Older History</button>
                        </div>


                    </div>
                    <table className="orders-table">


                    {orders.map((data, index) => {
                            return (<OrderT key={index} ords1={data.ords1} ords2={data.ords2} ords3={data.ords3} ords4={data.ords4} ords5={data.ords5} ords6={data.ords6}/>)
                        })}



                    </table>
                    <div className='orders-bot'>
                        <button type="button" id='obbtn'>Previous</button>
                        <p>Page 1 0f 10</p>
                        <button type="button" id='obbtn'>Next</button>


                    </div>

                </div>

            </div>

        </div>



            

        </>
    )
}
export default Orders