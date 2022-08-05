import { Fragment } from "react"
import Meals from '../../assets/meals.jpg';

import classes from './Header.module.css';


const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h2>React Meals</h2>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={Meals} alt="meals image" />
            </div>
        </Fragment>
    )
}

export default Header;