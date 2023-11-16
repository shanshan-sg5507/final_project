import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { ProductContext } from "./ProductContext";
import './ProductsList.css'

export default function ProductsList() {

    const [products, setProducts] = useState([])
    const { setSelectedProduct } = useContext(ProductContext)

    // this effect only runs one time after UI mounted
    // state will be changed, re-render will not trigger useEffect again.
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products.splice(0, 20)));

    }, [])

    console.log(products)
    return (
        <div className="productsListContainer">
            <h1>In Product List Page</h1>
            <div className="heroSection">
                later add sections on the bottom of this page.
            </div>
            <div className="productList">
            {
                products.map((item) => {
                    return (
                        <Link onClick={() => setSelectedProduct(item)} to='/product'>
                            <div className='productCard' key={item.id}>
                                <img src={item.thumbnail} alt="thumbnail"/>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                {item.discountPercentage !== 0 ? (
                                <div>
                                    <p className="discount">{item.discountPercentage}% OFF</p>
                                    <p className="discount_price"><strong>${(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}</strong> <del>${item.price}</del></p>
                                </div>
                                ) : (
                                <h4>${item.price}</h4>
                                )}
                            </div>
                        </Link>
                    )
                })
            }

        </div>

        </div>
        
        
    )
}