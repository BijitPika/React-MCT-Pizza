import {Routes,Route} from "react-router-dom"
import API from "./API"
import { Link } from "react-router-dom"

import './Home.css'
function Home(){
    return (
        <div className="homeContainer">
            <div className="menu">
                <div className='logo'>
                    <h1>React <span>Pizza</span></h1>
                </div>
                <div className='menuList'>
                    <p>Home</p>
                    <p>Pages</p>
                    <Link to='/menu' style={{textDecoration:"none",color:"black"}}><p id="menu">Menu</p></Link>
                    <p>Blog</p>
                    <p>Landing</p>
                </div>
                <div className='footer'>
                    <div className='socials'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-solid fa-envelope"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className='order'>
                        <h1>ORDER ONLINE!</h1>
                    </div>
                </div>
            </div>
            <div className="homeMain">
                <div className='homeText'>
                    <h1>DELIVERY TO THE <br></br>DOORSTEP</h1>
                    <p><i className="fa-solid fa-check"></i> Choose Your Ingredients</p>
                    <p><i className="fa-solid fa-check"></i> Get free delivery 24/7</p>
                    <p><i className="fa-solid fa-check"></i> Special Gift Coupons</p>
                    <input type='email' placeholder="Email"></input>
                    <button>Subscribe</button>

                </div>
                
            </div>
            <div>
                
            </div>
            
        </div>
        
    )
}

export default Home