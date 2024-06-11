import './AddOrders.css'

const AddOrders = () => {
    return (
        <>
            <div className='addOrder-main'>
                <div className='addord-cont'>
                    <div className='addord-pcont'>
                        <p id='addordP'>New Orders</p>
                    </div>

                    <div className='addord-input-cont'>

                        <div className='ord-input' >
                            <label htmlFor="" id='ord-label'>Product ID</label>
                            <input type="text" name="" id="ord-inp" placeholder='Enter product name' />
                        </div>

                        <div className='ord-input'>
                            <label htmlFor="" id='ord-label'>Product</label>
                            <input type="text" name="" id="ord-inp" placeholder='Enter product ID' />
                        </div>

                        <div className='ord-input'>
                            <label htmlFor="" id='ord-label'>Category</label>
                            <input type="text" name="" id="ord-inp" placeholder='Select product category' />
                        </div>

                        <div className='ord-input'>
                            <label htmlFor="" id='ord-label'>Order Value</label>
                            <input type="text" name="" id="ord-inp" placeholder='Enter order value' />
                        </div>

                        <div className='ord-input'>
                            <label htmlFor="" id='ord-label'>Quantity</label>
                            <input type="text" name="" id="ord-inp" placeholder='Enter product quantity' />
                        </div>

                        <div className='ord-input'>
                            <label htmlFor="" id='ord-label'>Unit</label>
                            <input type="text" name="" id="ord-inp" placeholder='Enter product unit' />
                        </div>

                        <div className='ord-input'>
                            <label htmlFor="" id='ord-label'>Buying Price</label>
                            <input type="text" name="" id="ord-inp" placeholder='Enter buying price' />
                        </div>

                        <div className='ord-input'>
                            <label htmlFor="" id='ord-label'>Date of Delivery</label>
                            <input type="text" name="" id="ord-inp" placeholder='Enter date of delivery' />
                        </div>
                        <div className='ord-check'>
                            <input type="checkbox" name="" id="ord-check" />
                            <span id='span-check'>Notify on the date of delivery</span>

                        </div>

                        <div className='ord-btn-bot'>
                            <div className='ord-btn-bots'>
                            <button type="button" id='ord-btn3'>Discard</button>
                            <button type="button" id='ord-btn4'>Add Products</button>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>


        </>
    )

}
export default AddOrders

