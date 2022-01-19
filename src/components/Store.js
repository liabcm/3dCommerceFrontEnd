import React,{useState, useEffect} from 'react'

const Store = () => {

    const [products, setProducts] = useState([{designerId:1,id:0,price:"10.88",rate:3,title:"chessboard",}])
    
    const getProducts = ()=>{
        fetch('https://localhost:44377/product/store')
        .then(response=>response.json())
        .then(data=>setProducts(data))

    }

    const addToCart = (id)=>{

        console.log(JSON.stringify({
                buyerId:2,
                product:{
                    id:id
                },
                quantity:1
            }))
        fetch('https://localhost:44377/cart',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:(JSON.stringify({
                buyerId:2,
                product:{
                    id:id
                },
                quantity:1
            }))
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }

    useEffect(()=>getProducts(),[]);

    return (
        <div>
            {products.map(product => 
              <div key={product.id}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <button onClick={()=>addToCart(product.id)}>Add To Cart</button>           
                    <div style={{borderTop:'1px solid #5f656d',height:'1px',margin:'16px 0'}}/>          
              </div>   )}
        </div>
    )
}

export default Store
