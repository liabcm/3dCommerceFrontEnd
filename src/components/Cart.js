import React,{useState} from 'react'

const Cart = () => {

    const [cartOrders, setCartOrders]= useState()

    const getCartOrders = ()=>{
        
    }

    return (
        <div>
            {cartOrders.map(order => 
              <div key={order.id}>
                    <p>{order.product.title}</p>
                    <div style={{borderTop:'1px solid #5f656d',height:'1px',margin:'16px 0'}}/>          
              </div>   )}
        </div>
    )
}

export default Cart
