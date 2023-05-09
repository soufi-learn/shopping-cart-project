import { Link } from "react-router-dom";
import shoppingCart from '../../assets/shopping-cart.svg';
import { useSelector } from "react-redux";

const Navbar = () => {
    const { itemsCounter } = useSelector(state => state.cartState);

    return (
        <header className="fixed top-0 z-10 flex justify-between w-full px-12 py-6 text-white shadow-md bg-slate-600">
            <nav>
                <ul>
                    <li><Link to='/' className="text-xl">Products</Link></li>
                </ul>
            </nav>
            <Link to='/cart' className="relative">
                <span className="absolute flex items-center justify-center w-6 h-6 text-sm font-bold bg-yellow-400 rounded-full text-slate-800 bottom-6 left-5">{itemsCounter}</span>
                <img src={shoppingCart} alt="shopping cart" />
            </Link>
        </header>);
}

export default Navbar;