import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext) ;
    const [hasHighlighted, setHasHighlighted] = useState(false)

    const {items} = cartCtx;
    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return;
        }
        setHasHighlighted(true)
        const timer = setTimeout(()=>{
            setHasHighlighted(false)
        }, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [items])

    

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0)

    const classesbtn = `${classes.button} ${hasHighlighted ? classes.bump : ''}`

    return (
        <button className={classesbtn} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;