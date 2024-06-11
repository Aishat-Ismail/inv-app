import './Suppliers.css'

const Supplier = ({sud1,sud2, sud3, sud4, sud5, sud6})=>{
    return(

        <>
            <tr id='sup-row'>
                <td>{sud1}</td>
                <td>{sud2}</td>
                <td>{sud3}</td>
                <td>{sud4}</td>
                <td>{sud5}</td>
                <td>{sud6}</td>
            </tr>

        </>
    )
}
export default Supplier
