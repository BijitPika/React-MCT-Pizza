import { Link } from "react-router-dom"
import './Success.css'
function Success(){
    return (
        <div className="successContainer">
            <div className="success">
            <img src='https://cdn.dribbble.com/users/571236/screenshots/2888472/happystate.gif' className="successIMG"></img>
            <p>Order Successfull!</p>
            <Link to='/'><button>Return to Home</button></Link>
            </div>
         
        </div>
    )
}

export default Success