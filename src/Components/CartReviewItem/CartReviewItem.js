import React from 'react';
import './CartReviewItem.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartReviewItem = ({ tutorial }) => {
    const { img, name, price, quantity } = tutorial;
    return (
        <div className="container">
            <div className="cart-review-item">
                <div>
                    <img src={img} width="150px" alt=''></img>
                </div>
                <div className="cart-review-item-content">
                    <div className="detail-item">
                        <p>{name}</p>
                        <p>Price : ${price}</p>
                        <p>Quantity : {quantity}</p>
                    </div>
                    <div className="delete-container">
                        <button className="delete-button">
                            <DeleteOutlineIcon className='delete'></DeleteOutlineIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartReviewItem;