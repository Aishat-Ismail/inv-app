import './Dashboard.css'

const SellStock = ({stk1, stk2, stk3, stk4})=>{
    return(
        <>
        <table></table>
        <tr id='rows'>
            <td>{stk1}</td>
            <td>{stk2}</td>
            <td>{stk3}</td>
            <td>{stk4}</td>
        </tr>
    
        </>
    )
}
export default SellStock
