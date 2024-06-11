import './Inventory.css'

const Invent = ({ inv1, inv2, inv3, inv4, inv5, }) => {

    return (
        <>
            <div id='viff'>

            </div>
            <div className='inv-cols'>
                <p id='ovps'>{inv1}</p>
                <div className='inv-cols-two'>
                    <p id='invP-up'>{inv2}</p>
                    <p id='invP-up'>{inv3}</p>
                </div>
                <div className='inv-cols-thr'>
                    <p id='invP-down'>{inv4}</p>
                    <p id='invP-down'>{inv5}</p>
                </div>
            </div>

        </>
    )
}
export default Invent