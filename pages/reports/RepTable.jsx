import './Reports.css'
const RepTable = ({rtp1, rtp2, rtp3, rtp4, rtp5, rtp6})=>{

    return(

        <>
        <tr id="rtp-row">
            <td id='rtps'>{rtp1}</td>
            <td id='rtps'>{rtp2}</td>
            <td id='rtps'>{rtp3}</td>
            <td id='rtps'>{rtp4}</td>
            <td id='rtps'>{rtp5}</td>
            <td id='rtps6'>{rtp6}</td>
        </tr>
        </>
    )
}
export default RepTable