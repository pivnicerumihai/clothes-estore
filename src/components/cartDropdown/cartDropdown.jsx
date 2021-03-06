import React from "react";
import { connect } from "react-redux";
import CustomButton from "../customButton/customButton";
import CartItem from "../cartItem/cartItem"
import { selectCartItems } from "../../redux/cart/cart.selector"
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import "./cartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            {
                cartItems.length ?
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message"> Your Cart is Empty</span>
            }
            <CustomButton onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));