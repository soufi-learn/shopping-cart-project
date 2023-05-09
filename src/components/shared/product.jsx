import { Link } from "react-router-dom";
import shorten from "../../helper/shorten";
import { isInCart, quantityCount } from "../../helper/cartFunctions";
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { selectedItems } = useSelector(state => state.cartState);

  const { id, title, image, price } = product;

  return (
    <section className="p-4 bg-white rounded shadow-md">
      <img src={image} alt={shorten(title)} className="object-contain w-9/12 mx-auto mb-4 h-72" />
      <h4 className="text-xl font-bold md:text-2xl text-slate-800">{shorten(title)}</h4>
      <p className="text-xl text-slate-700 ">{price}$</p>
      <div className="flex items-center justify-between mt-4 font-bold">
        <Link to={`/products/${id}`} className="text-blue-500 transition-all hover:scale-105">Details</Link>
        <div>
          {quantityCount(selectedItems, id) === 1 && <button type="button" className="px-3 mx-1 font-bold text-white bg-blue-500 active:border-blue-600 active:bg-blue-500 btn hover:bg-blue-600" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: product })}>{<FaTrash />}</button>}
          {quantityCount(selectedItems, id) > 1 && <button type="button" className="px-3 mx-1 font-bold text-white bg-blue-500 active:border-blue-600 active:bg-blue-500 btn hover:bg-blue-600" onClick={() => dispatch({ type: 'DECREASE', payload: product })}><FaMinus /></button>}
          {quantityCount(selectedItems, id) > 0 && <span className="mx-3">{quantityCount(selectedItems, id)}</span>}
          {isInCart(selectedItems, id) ? (
            <button type="button" className="px-3 mx-1 font-bold text-white bg-blue-500 active:border-blue-600 active:bg-blue-500 btn hover:bg-blue-600" onClick={() => dispatch({ type: 'INCREASE', payload: product })}><FaPlus /></button>
          ) :
            <button type="button" className="text-white bg-blue-500 active:border-blue-600 active:bg-blue-500 btn hover:bg-blue-600" onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>Add To Cart</button>
          }


        </div>
      </div>
    </section>
  );
};

export default Product;
