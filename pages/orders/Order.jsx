import './Orders.css'


const Order = ({ ord1, ord2, ord3, ord4, ord5, }) => {

    return (
        <>
            <div id='viff'>

            </div>
            <div className='ord-cols'>
                <p id='ovps'>{ord1}</p>
                <div className='ord-cols-two'>
                    <p id='ordP-up'>{ord2}</p>
                    <p id='ordP-up'>{ord3}</p>
                </div>
                <div className='ord-cols-thr'>
                    <p id='ordP-down'>{ord4}</p>
                    <p id='ordP-down'>{ord5}</p>
                </div>
            </div>






        </>
    )
}
export default Order