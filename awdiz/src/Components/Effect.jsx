import { useState, useEffect } from "react";

const Effect = () => {

    // const [number, setNumber] = useState(0);
    // const [number2, setNumber2] = useState(0);

    const [products, setProducts] = useState();
    console.log(products, 'products heree')

    // useEffect ( () => {alert("working!")})
    // will execute the code on every render

    // useEffect(() => { alert("working!") }, [])
    //will execute the code  very first time

    // useEffect(() => { alert("working!") }, [number])
    // will execute the code  very first time & when the specific state will change

    // useEffect(() => { alert("working!") }, [number,number2])
    //  will execute the code  very first time & for multiple states that we passed

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])


    return (
        <>
            {/* <h1>Number {number}</h1>
            <h1>Number-1 {number2}</h1>
            <button onClick={() => setNumber(number + 1)} >click</button>
            <button onClick={() => setNumber2(number2 + 1)}>click for 1</button> */}

            <div id="products">
                {products && products.map((e) => (
                    <div>
                        <img src={e.image} />
                        <h1>{e.title}</h1>
                        <p>{e.price}</p>
                        <p>200 for two</p>
                    </div>))
                }
            </div>

        </>


    )
}
export default Effect;