// import MealItem from '../Meals/MealItem/MealItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'c2', name: 'sushi', amount: 2, price: 12.99}].map(item=> 
        <li key={item.id}>{item.name}</li>
    )}</ul>;

    return (
        <Modal onClick={props.onClick}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount: </span>
                <span>43.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Cancel</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;