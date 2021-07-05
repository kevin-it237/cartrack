import React from 'react';
import { ReactComponent as Back } from "../../../../assets/icons/back_arrow.svg"
import { useHistory } from 'react-router-dom';
import CardItem from "../../components/cart.item/cart.item"
import Button from "../../../../app/components/buttons/button/button"
import './cart.scss' 

const Cart = () => {
    const history = useHistory()

    return (
        <div id="cart">
            <div className="header">
                <Back onClick={() => history.goBack()} />
                <p>Panier</p>
            </div>

            <div className="cart-items">
                <CardItem />
                <CardItem />
                <CardItem />
            </div>

            <div className="footer">
                <div className="summary">
                    <p>TOTAL</p>
                    <p className="price">$1530</p>
                </div>
                <Button size="sm">CHECKOUT</Button>
            </div>
        </div>
    )
}

export default Cart;