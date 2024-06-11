import './AddInvent.css'
import { useState } from 'react';
const AddInvent = ({ addData, close })=>{
    const [supplierData, setSupplierData] = useState({
        product: '',
        buyingPrice: '',
        quantity: '',
        thresholdValue: '',
        expiryDate: '',
        availability: ''
    });
    const url = "https://66309c23c92f351c03da724a.mockapi.io/inventory"
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplierData({
            ...supplierData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        addData(supplierData); // Assuming we're adding a "name" field here, adjust as needed
        close()
    };


    return(

        <>
         <div className='addinver-main'>
                <div className='addinv-cont'>
                    <div className='addinv-pcont'>
                        <p id='addinvP'>New Inventory</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className='addinv-input-cont'>

                        <div className='inv-input' >
                            <label htmlFor="" id='inv-label'>Product Name</label>
                            <input type="text" name="product" id="inv-inp" placeholder='Enter product name' value={supplierData.product}
                                onChange={handleChange} />
                        </div>

                    

                       

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Buying Price</label>
                            <input type="text" name="buyingPrice" id="inv-inp" placeholder='Enter buying price' value={supplierData.buyingPrice}
                                onChange={handleChange} />
                        </div>

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Quantity</label>
                            <input type="text" name="quantity" id="inv-inp" placeholder='Enter product quantity' value={supplierData.quantity}
                                onChange={handleChange} />
                        </div>

                        

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Expiry Date</label>
                            <input type="text" name="expiryDate" id="inv-inp" placeholder='Enter expiry date' value={supplierData.expiryDate}
                                onChange={handleChange} />
                        </div>

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Threshold Value</label>
                            <input type="text" name="thresholdValue" id="inv-inp" placeholder='Enter threshold value' value={supplierData.thresholdValue}
                                onChange={handleChange} />
                        </div>
                        {/* <div className='inv-check'>
                            <input type="checkbox" name="" id="inv-check" />
                            <span id='span-check'>Notify on the date of delivery</span>

                        </div> */}

                        <div className='inv-btn-bot'>
                            <div className='inv-btn-bots'>
                                <button  id='inv-btn3' onClick={close}>Discard</button>
                            <button type="submit" id='inv-btn4'>Add Products</button>
                            </div>
                            
                        </div>
                    </div>
                    </form>

                </div>

            </div>

        </>
    )
}
export default AddInvent