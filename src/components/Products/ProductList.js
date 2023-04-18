import "./Products.css"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"



export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [topPriced, updateTopPriced] = useState(false)//default to all prices
    const [filteredProducts, setFiltered] = useState([])
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch('http://localhost:8088/products?_sort=name&_order=asc')
            .then(response => response.json())
            .then((productArray) => {
                setProducts(productArray)
            })
            console.log("Initial state of products", products) // View the initial state of products
        },
        [] // When this array is empty, you are observing initial component state
    )

  
        useEffect(
            () => {
                if (topPriced) {
                    const topProductArray = products.filter(product => {
                        return product.price > 2.00
                    })
                    setFiltered(topProductArray)
                }
                else {
                    // const myProducts = products.filter(product => product.userId === kandyUserObject.id)
                    setFiltered(products)
            }
            },
            [topPriced, products]
        )

return <>
    { 
    kandyUserObject.staff
      ?<>
            
            <button onClick={() => updateTopPriced(true)}>Top Priced</button>
            <button onClick={() => updateTopPriced(false)}>All My Products</button>
            <button onClick={() => navigate("/product/add")}>Add a Product</button>
        </>:""
          
        
}
    <h2>List of Products</h2><article className="products">
        {filteredProducts.map(
            (product) => {
                return <section className="product" key={`product--${product.id}`}>
                    <header>{product.name}</header>
                    <footer> ${product.price}</footer>
                </section>
            }
        )}
    </article></>
}
