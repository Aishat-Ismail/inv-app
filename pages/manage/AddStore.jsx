import { useState } from 'react'
import './AddStore.css'



const AddStore = (props) => {

    const [formData, setFormData] = useState({
        branch: " ",
        store: " ",
        address: " ",
        code: "",
        contact: " ",

    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData, [name]: value
        }))
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(formData);
        props.arr.push(formData)
        //console.log(props.arr)
    }

    return (
        <>
            <div className='addstore-main'>
                <div className='addstr-cont'>
                    <div className='addstr-pcont'>
                        <p id='addstrP'>New Stores</p>
                    </div>

                    <form action="" onSubmit={handleSumbit} className='addstr-input-cont'>

                        <div className='str-input' >
                            <label htmlFor="" id='str-label'>Branch</label>
                            <input type="text" onChange={(e) => handleChange(e)} value={formData.branch} name="branch" id="str-inp" placeholder='Enter store branch' />
                        </div>

                        <div className='ord-input'>
                            <label htmlFor="" id='ord-label'>Store</label>
                            <input type="text" onChange={(e) => handleChange(e)} value={formData.store} name="store" id="str-inp" placeholder='Enter store name' />
                        </div>

                        <div className='str-input'>
                            <label htmlFor="" id='str-label'>Address</label>
                            <input type="text" onChange={(e) => handleChange(e)} value={formData.address} name="address" id="str-inp" placeholder='Enter store address' />
                        </div>

                        <div className='str-input'>
                            <label htmlFor="" id='str-label'>Code</label>
                            <input type="text" onChange={(e) => handleChange(e)} value={formData.code} name="code" id="str-inp" placeholder='Enter address code' />
                        </div>

                        <div className='str-input'>
                            <label htmlFor="" id='str-label'>Contact</label>
                            <input type="text" onChange={(e) => handleChange(e)} value={formData.contact} name="contact" id="str-inp" placeholder='Enter contact number' />
                        </div>




                        <div className='str-btn-bot'>
                            <div className='str-btn-bots'>
                                <button type="button" id='str-btn3' onClick={props.modal}>Discard</button>
                                <button type="submit" id='str-btn4'>Add Store</button>
                            </div>

                        </div>


                    </form>


                </div>

            </div>

        </>
    )
}
export default AddStore