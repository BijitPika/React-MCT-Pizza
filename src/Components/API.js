import { useState, useEffect } from "react";
import './API.css'
import { Link } from "react-router-dom";
import Cart from "../Routing/Cart";
import {Routes, Route} from 'react-router-dom'


function API(){
    const [state,setState]=useState([])
    
    useEffect(()=>{
        getPizza()
    },[])

    const url = 'https://pizzaallapala.p.rapidapi.com/productos';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '768d6b335cmsh919d097e5789ba5p11a5e0jsnac841190b603',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
    };
    
    const getPizza=async()=>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            setState(result.productos)
            console.log(state);
           
        } 
        catch (error) {
            console.error(error);
        }

    }
    getPizza()
    return (
    <div className="MainProductContainer">
        <div className="mainProductHeading">
            
        <h4>Menu</h4>
        </div>
        
     <div className="productList">
        
        
        {
            state.map((ele)=>{
                return (
                    
                    <div className="products" >
                        
                     <div className="productBody">
                     <img src={ele.linkImagen}></img>
                        <h4 style={{color:"orangered"}}>{ele.nombre}</h4>
                        <p style={{fontStyle:"italic"}}>${ele.precio}</p>
                     </div>
                         <div className='hideButton'>
                            <nav>
                            <Link to={"/Cart"} ><button className="cartBtn">ADD TO CART</button></Link>
                            <button className="detailsBtn">QUICK VIEW</button>
                            </nav>
                           

                    </div>
                       
                    </div>
                )
                
            })
        }
     </div>
     </div>
        
    )
        }
   


export default API