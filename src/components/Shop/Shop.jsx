import { useEffect, useState } from "react"
import "./Shop.css"
import Product from "../Product/Product"
import Cart from "../Cart/Cart";


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        if(carts) {
            setCarts([...carts, product])
        } else{
            setCarts([product])
        }
    }
    console.log(carts)
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map((product) => (
                    <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                     />
                ))
            }
            </div>
            <div className="cart-container">
                <Cart carts={carts}/>
            </div>
        </div>
    )
}

export default Shop