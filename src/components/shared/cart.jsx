import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import shorten from "../../helper/shorten";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Decrease, Increase, RemoveItem, InputHandler } from '../../redux/cart/cartAction';

const Cart = ({ data }) => {
    const dispatch = useDispatch();
    const { image, title, price, quantity, id } = data;


    return (
        <section className="flex items-center justify-between p-4 mb-4 bg-white rounded shadow">
            <img src={image} alt={shorten(title)} className="mr-6 w-36" />

            <div className="flex-1 mx-4">
                <Link to={`/products/${id}`} className="text-blue-700" ><h3 className='text-xl md:text-2xl'>{shorten(title)}</h3></Link>
                <p>{price}$</p>
            </div>

            <div className="flex-1">
                <input type="number" value={quantity} min='1' max='100' onChange={(e) => dispatch(InputHandler(data, e.target))} className="w-20 p-2 px-4 font-bold text-center rounded shadow outline-none bg-slate-100 counter-input" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                {quantity > 1 ? <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-600 btn" onClick={() => dispatch(Decrease(data))}><FaMinus /></button> :
                    <button type="button" className="text-white bg-red-500 hover:bg-red-600 active:bg-red-500 btn" onClick={() => dispatch(RemoveItem(data))}>
                        <FaTrash />
                    </button>
                }
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-600 btn" onClick={() => dispatch(Increase(data))}><FaPlus /></button>
            </div>
        </section>
    );

}

export default Cart;