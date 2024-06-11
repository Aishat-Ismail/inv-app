import './Suppliers.css'
import AddSuppliers from './AddSuppliers'
import Supplier from './Supplier'
import Filters from '../../assets/Filters.png'
import { useState, useEffect } from 'react'

const Suppliers = ({ShowAddSup}) => {
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading]= useState(false)
    const url = "https://66309c23c92f351c03da724a.mockapi.io/supplier"

    const openModal = () =>{
        setModalShow(true)
    }

    const closeModal = () =>{
        setModalShow(false)
    }

    const togglePage = ()=>{
        ShowAddSup((previousState) => !previousState)
    }

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    


      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setTableData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };


    
    
      const addData = async (newData) => {
        console.log(newData)
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
          });
          if (response.ok) {
            const data = await response.json();
            setTableData([...tableData, data]);
          } else {
            console.error('Failed to add data:', response.statusText);
          }
        } catch (error) {
          console.error('Error adding data:', error);
        }
      };

    const supplier = [

       

        {
            sud1: 'Richard Martin',
            sud2: 'Kit Kat',
            sud3: '7687764556',
            sud4: 'richard@gmail.com',
            sud5: 'Taking Return',
            sud6: '13',

        },

        {
            sud1: 'Tom Homan',
            sud2: 'Maaza',
            sud3: '7687764556',
            sud4: 'homan@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Chaarin Char',
            sud2: 'Diary Milk',
            sud3: '7687764556',
            sud4: 'chaarin@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Hoofman Hoof',
            sud2: 'Saffron',
            sud3: '7687764556',
            sud4: 'hoofman@gmail.com',
            sud5: ' Not Taking Return',
            sud6: '12',

        },
        {
            sud1: 'Richie Char',
            sud2: 'Marie Gold',
            sud3: '7687764556',
            sud4: 'richie@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Lizzy Gold',
            sud2: 'Sardine',
            sud3: '7687764556',
            sud4: 'lizzygold@gmail.com',
            sud5: 'Taking Return',
            sud6: '9',

        },

        {
            sud1: 'Denker Duke',
            sud2: 'Milo',
            sud3: '7687764556',
            sud4: 'denverduke@gmail.com',
            sud5: ' Not Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Joe Nike',
            sud2: 'Orange',
            sud3: '7687764556',
            sud4: 'joenike@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Denver Duke',
            sud2: 'Apple',
            sud3: '7687764556',
            sud4: 'denver@gmail.com',
            sud5: 'Taking Return',
            sud6: '7',

        },

        {
            sud1: 'Richard Martin',
            sud2: 'Kit Kat',
            sud3: '7687764556',
            sud4: 'richard@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },
        {
            sud1: 'Faideen Deen',
            sud2: 'Apple',
            sud3: '7687764556',
            sud4: 'faideendeen@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },
        {
            sud1: 'Richard Martin',
            sud2: 'Kit Kat',
            sud3: '7687764556',
            sud4: 'richard@gmail.com',
            sud5: 'Taking Return',
            sud6: '7',

        },

        {
            sud1: 'Aisha Martin',
            sud2: 'Good Day',
            sud3: '7687764556',
            sud4: 'aishat@gmail.com',
            sud5: ' Not Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Richard Martin',
            sud2: 'Coca Cola',
            sud3: '7687764556',
            sud4: 'richard@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Hope Martin',
            sud2: 'Pepsi',
            sud3: '7687764556',
            sud4: 'hopemartin@gmail.com',
            sud5: 'Taking Return',
            sud6: '7',

        },
    ]

    return (

        <>
        <div className='suppliers-pos' style={{position : "relative"}}>
                {modalShow && <AddSuppliers addData={addData} close={closeModal}/>}
            <div className="suppliers-main">
                <div className="suppliers-top">
                    <p id='supP'>Suppliers</p>
                    <div className="sup-btn-cont">
                        <button type="button" id="sbc1" onClick={openModal}>Add Product</button>
                        <button type="button" id="sbc2"> <img src={Filters} alt="img" id='supImg' />Filters</button>
                        <button type="button" id="sbc3">Download all</button>
                    </div>


                </div>
                <table className="suppliers-table">
                    <tr>
                        <th>Supplier Name</th>
                        <th>Product</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>Type </th>
                        <th>On The way</th>

                    </tr>
                    
                    

                    {tableData.map((data, index) => {

                        return (<Supplier key={index} sud1={data.supplierName} sud2={data.product} sud3={data.contactNumber} sud4={data.email} sud5={data.type} sud6={data.onTheWay} />)
                    })}


                </table>
                <div className='suppliers-bot'>
                    <button type="button" id='spbtn'>Previous</button>
                    <p>Page 1 0f 10</p>
                    <button type="button" id='spbtn'>Next</button>


                </div>

            </div>

        </div>
       
        </>
    )
}
export default Suppliers
