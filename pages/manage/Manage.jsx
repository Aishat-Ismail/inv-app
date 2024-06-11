
import Manages from "./Manages"
import './Manage.css'
import AddStore from "./AddStore"
import { useEffect, useState } from "react"

const Manage = ({ShowAddStr}) => {
    const [modalShow, setModalShow] = useState(false)

    const openModal = () =>{
        setModalShow(true)
    }

    const closeModal = () =>{
       
        setModalShow(false)
    }

    const togglePage = ()=>{
        ShowAddStr((previousState) => !previousState)
    }



    const manager = [
        
        {
            branch: 'Singanallur Branch',
            store: 'Lisa Store',
            address: '1A/Krihnarajapuram, 3rd street sulur',
            code: 'Coimbatore - 6313403',
            contact: '044- 653578',
            edit: 'Edit'

        },

        {
            branch: 'Slur Branch',
            store: 'Lisa Store',
            address: '54 Ramani colony, 3rd street sulur',
            code: 'Coimbatore - 63133452 ',
            contact: '044- 653763',
            edit: 'Edit'


        },

        {
            branch: 'Gangradama Branch',
            store: 'Lisa Store',
            address: '32/ Venkatasamy layout, 3rd street sulur',
            code: 'Coimbatore - 63455303',
            contact: '044-263783',
            edit: 'Edit'
            

        },

        
        
    ]

    //  useEffect(()=>{
    //         console.log(manager)
    //  }, [manager])


    return (

        <>
        <div className="stores-pos">
            {modalShow && <AddStore modal={closeModal} arr={manager} />}
        <div className="manage-main">
                <div className="manage-up">
                    <div id="manage-store">
                        <p id="manage-p">Manage Store</p>

                    </div>
                   <button type="button" id="manage-add" onClick={openModal}>Add Store</button>
                
                </div>

                <div className='manage-mains'>

                    {manager.map((data, index) => {
                        return (<Manages key={index} branch={data.branch} store={data.store} address={data.address} code={data.code} contact={data.contact} edit={data.edit}/>)
                    })}
                </div>


            </div>

        </div>
            
        </>
    )
}
export default Manage