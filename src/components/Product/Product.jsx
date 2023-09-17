import "./Product.css"

const Product = ({product, handleAddToCart}) => {
  const {id, name, category, price, img, ratings} = product
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt={category} />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>Ratings: {ratings} star</p>
      </div>
      <button className="btn-cart" onClick={() => handleAddToCart(product)}>add To cart</button>
    </div>
  )
}

export default Product