import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import './Cart.css'

export default function Cart() {
    const items = useSelector(state => state.cart.items); 
    //enhance cart state - loop through ori cart from redux
    // find duplicated item and add another key and value pair into the item obj.

    return (
       <div className='cart'>
            {items?.map((item) => (
                <div>
                    <hr />
                    <div className='cart_item'>
                        <div className='cart_part cart_img'>
                            <img src={item.thumbnail}/>
                        </div>
                        <div className='cart_part cart_title'>
                            <h2>{item.title}</h2>
                            <p>{item.category}</p>
                            <p>{item.description}</p>
                        </div>
                        <div className="cart_part cart_price">
                            {item.discountPercentage !== 0 ? (
                                <div className='with_discount'>
                                    <div>DISCOUNTED PRICE: </div>
                                    <div className='discounted_price'><strong>
                                        ${(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}
                                    </strong></div>
                                    <div>
                                        <del>${item.price}</del>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h4>${item.price}</h4>
                                </div>
                            )}
                        </div>
                    </div>
                    </div>
                ))
            }
            <div><hr/></div>
       </div>
    )
}