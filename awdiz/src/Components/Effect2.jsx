import { useState, useEffect } from "react";

const Effect2 = () => {
    const [products, setProducts] = useState();
    console.log (products, 'products here')

    useEffect (() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => setProducts (json))

    }, []
    )

    return(
        <>
        <div id="products">
  
         { products && products.map((e,i) => (
            <div key={i}>
                <img src= {e.image} alt="" />
                <h1> {e.title}</h1>
                <p> {e.price}</p>
                <p> 250 for each</p>
                
            </div>
         )  
         )

         }


        </div>
        
        </>
    )


}
export default Effect2;