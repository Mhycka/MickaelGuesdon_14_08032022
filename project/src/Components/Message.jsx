

/** Modal showed when the employee is created
 * @param {function} setCreated- used as a switch to open or close the modal
 */
function Message({setCreated}) {

    return (
        <div className="notif" onClick={()=>setCreated(false)}>
            <div id="confirmation" className="modal">Employee Created!
                <div className='close-modal' ></div>
            </div>
        </div>
    )
}

export default Message