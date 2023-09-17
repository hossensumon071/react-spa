// use local storage to manage cart data 
const addToDb = (id) => {
    let shoppingCart = {}

    // get the shopping cart from local storage 
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity 
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    } else {
        shoppingCart[id] = 1
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

}

const removeFromDb = () => {
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem("shopping-cart")
}

export { 
    addToDb,
    removeFromDb,
    deleteShoppingCart
 }










 // use reduce method to calculate the array value 
// const numbers = [12, 15, 20 ,40];
// const sumReducer = (previous, current) => previous + current
// const total = numbers.reduce(sumReducer, 0)


// const items = [
//     {id: 1, name: "alta", price: 100},
//     {id: 2, name: "malta", price: 200},
//     {id: 3, name: "dalta", price: 300},
//     {id: 4, name: "lemon", price: 400},
// ]

// const itemSumReducer = (previus, current) => previus + current.price
// const itemTotal = items.reduce(itemSumReducer, 0)


const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current;
    const total = products.reduce(reducer, 0);
    return total;
}