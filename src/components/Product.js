import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import ReactStars from "react-rating-stars-component";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "./actions/cartAction";
import './Product.css'
import { useNavigate } from "react-router-dom";

function Product() {
  const { selectedProduct, setSelectedProduct } = useContext(ProductContext);
  // rootReducer == state
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  }
  const handleRemoveFromCart = itemId => {
    dispatch(removeFromCart(itemId));
  }

//   console.log(selectedProduct, "This data is in individual product page");

console.log(items, 'from redux store');

if (!selectedProduct) {
    navigate("/");
    return <h1>Error, selectedProduct not found / is empty</h1>
}
  return (
    <div className="product_grid">
        <div className="product_images">
            {selectedProduct.images.map((image, index) => (
                <div key={index} className="product_image">
                    <img src={image} alt={`Product thumbnail`} />
                </div>
            ))}
        </div>
        <div>
            <div className="product_info">
                <h1>{selectedProduct.title}</h1>
                <div className="ratings">
                    <div>
                        <ReactStars
                            count={5}
                            value={selectedProduct.rating}
                            size={20}
                            activeColor="#ffd700"
                            isHalf={true}
                            edit={false}
                        />
                    </div>
                    <div> ({selectedProduct.rating})</div>
                </div>
                <p className="product_category">{selectedProduct.category}</p>
                <p>{selectedProduct.description}</p>

            </div>

            <div className="product_price">
                {selectedProduct.discountPercentage !== 0 ? (
                    <div>
                        <p className="discount">{selectedProduct.discountPercentage}% OFF</p>
                        <p className="discount_price">
                            <strong>
                                ${(selectedProduct.price * (1 - selectedProduct.discountPercentage / 100)).toFixed(2)}
                            </strong>{" "}
                            <del>${selectedProduct.price}</del>
                        </p>
                    </div>
                ) : (
                    <div>
                        <h4>${selectedProduct.price}</h4>
                    </div>
                )}
                <button onClick={() => handleAddToCart(selectedProduct)}>ADD TO CART</button>
            </div>
        </div>
    </div>
  );
  //style indiv. page
  //when click on home, go back to home page.
}

export default Product;
