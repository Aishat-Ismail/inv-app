
import './Manage.css'
const Manages = ({ branch, store, address, code, contact, edit }) => {

    return (

        <>
            <div className="manages-main">
                <div id="manages-left">
                    <p id='man-left'>
                        {branch}
                    </p>

                </div>
                <div className='manages-cont'>
                    <div id="manages-mid">
                        <p id="manages-head">
                            {store}

                        </p>
                        <div className='man-info'>
                            <p id="man-address">{address}</p>
                            <p id="man-code">{code}</p>
                            <p id="man-contact">{contact}</p>
                        </div>


                    </div>
                    <button type="button" id='man-edit'>{edit}</button>

                </div>


            </div>

        </>
    )
}
export default Manages