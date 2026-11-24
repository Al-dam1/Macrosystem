import React from 'react'
import { Trash } from "lucide-react";
import './Cart.css'
const Cart = ({ cartItems , isOpen, onClose}) => {
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'> <h1>carrito</h1></div>
            <button onClick={onClose} className='close-button'>x</button>
            <div className='cart-content'>
                {cartItems.length === 0 ? (<p style={{ color: 'red' }}>
                    el carrito esta vacio
                </p>) : (<ul className='cart-item'>{cartItems.map((item,index)=>(
                    <>
                    <li key={index} style={{color:'black'}}>
                        {item.nombre} - {item.precio}
                        <button><Trash /></button>
                    </li>
                    </>
                ))}</ul>)}
            </div>
        </div>
    )
}

export default Cart
