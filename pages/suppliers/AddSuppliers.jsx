import './AddSuppliers.css'
import addsup from '../../assets/addsup.png'
import { useState } from 'react'

const AddSuppliers = ({ addData, close }) => {
    const [supplierData, setSupplierData] = useState({
        name: '',
        product: '',
        category: '',
        buyingPrice: '',
        contactNumber: '',
        type: ''
    });
    const url = "https://66309c23c92f351c03da724a.mockapi.io/supplier"
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
  

    return (

        <>
            <div className='addsup-main'>
                <div className='addsup-cont'>

                    <p id='new-supP'>New Supplier</p>
                    <div className='sup-profile-cont'>
                        {/* <div className='spc-main'>
                            <div className='sup-profile'>
                                <img src={addsup} alt="img" id='addsupImg' />
                                <div className='prof-p'>
                                    <p id='sup-drag'>Drag image here</p>
                                    <p id='sup-or'>or</p>
                                    <p id='sup-brow'> Browse Image</p>
                                </div>
                            </div>
                        </div> */}
                        <form onSubmit={handleSubmit}>
                        <div className='spc-input-cont'> 
                            <div className='spc-input' >
                                <label htmlFor="" id='spc-label'>Supplier Name</label>
                                <input type="text" name="name"
                                    id="name"
                                    placeholder='Enter supplier name'
                                    value={supplierData.name}
                                    onChange={handleChange} />
                            </div>
                            <div className='spc-input'>
                                <label htmlFor=""  id='spc-label'>Product</label>
                                <input type="text" name="product" id="spc-inp" placeholder='Enter product'
                                    value={supplierData.product}
                                    onChange={handleChange} />
                            </div>
                            <div className='spc-input'>
                                <label htmlFor="" id='spc-label'>Category</label>
                                <input type="text" name="category" id="spc-inp" placeholder='Select product category' value={supplierData.category}
                                    onChange={handleChange} />
                            </div>
                            <div className='spc-input'>
                                <label htmlFor="" id='spc-label'>Buying Price</label>
                                <input type="text" name="buyingPrice" id="spc-inp" placeholder='Enter buying price' value={supplierData.buyingPrice}
                                    onChange={handleChange} />
                            </div>
                            <div className='spc-input'>
                                <label htmlFor="" id='spc-label'>Contact Number</label>
                                <input type="text" name="contactNumber" id="spc-inp" placeholder='Enter supplier number' value={supplierData.contactNumber}
                                    onChange={handleChange} />
                            </div>
                            <div className='spc-inputs'>
                                <label htmlFor="" id='spc-label'>Type</label>
                                <div className='spc-btns'>

                                    <input type="text" name="type" id="spc-inp" placeholder='Enter type number' value={supplierData.type}
                                        onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className='spc-btn-bot'>
                            <div className='spc-btn-bots'>
                            <button  id='spc-btn3' onClick={close}>Discard</button>
                            <button type="submit" id='spc-btn4'>Add Supplier</button>
                            </div>
                            
                        </div>
                        </form>
                    </div>




                </div>


            </div>

        </>
    )
}
export default AddSuppliers