import './Cart.css'
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
function Cart(){
    
    return (
        <div className='cartDiv'>
            <div className='cartBox'>
                <div style={{width:"100%",height:"15%",border:"1px solid white",background:"orangered",color:"white",borderRadius:"10px"}}>
                <h1>WELCOME TO ITALIAN PIZZA!</h1>
                <p>We deliver in 40 mins max. If not Pizza's on us!</p>
                </div>
            <div style={{textAlign:"left",marginLeft:"30px"}}>
            <h3>Email</h3>
            <input type="email"></input>
            <h3>Phone</h3>
            <input type="number" placeholder='Area'></input>
            <input type="number" placeholder='Local'></input>
            <input type="number" placeholder='Local'></input>
            <h3>Number of Slices</h3>
            <input type="number"></input>
            <h3>Pizza Size</h3>
            <select>
                <option>8 Inch</option>
                <option>10 Inch</option>
                <option>12 Inch</option>
                <option>14 Inch</option>
            </select>
            <h3>Topping</h3>
            <select>
                <option>Peperoni</option>
                <option>Onions</option>
                <option>Mushrooms</option>
                <option>Sauce</option>
            </select>
            <div class="tacbox">
            <input id="checkbox" type="checkbox" />
             <label for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
            </div>
            </div>
           
            <Link to='/Success'><button>Order Now!</button></Link>
            </div>
           
        </div>
    )
}

export default Cart