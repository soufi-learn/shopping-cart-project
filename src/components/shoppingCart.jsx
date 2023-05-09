import Cart from "./shared/cart";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import ShoppingBag from '../assets/shopping-bag.svg';
import { CheckOut, Clear } from "../redux/cart/cartAction";
import styled from 'styled-components';

// SWEET ALERT 2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// GET USESELECTOR & USEDISPATCH TO GET DATA AND DISPATCH
import { useSelector, useDispatch } from "react-redux";

const ProductSection = styled.div`
   @media screen and (max-width: 650px) {
    width: 800px;
   }
`;

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const { selectedItems: products, itemsCounter, total, checkOut } = useSelector(state => state.cartState);


    const MySwal = withReactContent(Swal);

    // ASK USER IF HE IS SURE TO CLEAR CART OR NOT!
    const clearHandler = () => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "Your shopping cart will be clear!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, clear it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(Clear());
            }
        })
    }

    return (
        <div className="container mt-10">
            {/* TITLE */}
            {products.length !== 0 && <h2 className="mb-8 font-bold text-center text-slate-800 lg:text-start">Shopping Cart</h2>}

            {/* CART PRODUCTS ANDTOTAL DETAILS */}
            {products.length !== 0 &&
                <div className="grid items-start gap-4">
                    <section className="overflow-auto lg:col-start-1 lg:col-end-9" >
                        <ProductSection>
                            {products.map(item => <Cart key={item.id} data={item} />)}
                        </ProductSection>
                    </section>

                    {/* TOTAL DETAILS AND DISPATCH BUTTONS */}
                    <section className="p-4 bg-white rounded shadow lg:col-start-9 lg:col-end-12 ">
                        <div>
                            <p className="mb-3"><span>Total Items:</span>{itemsCounter}</p>
                            <p><span>Total Price:</span>{parseFloat(total).toLocaleString()}</p>
                        </div>ns Casual
                        <hr />
                        <div className="grid grid-cols-2 gap-2 ">
                            <button type="button" className="text-white bg-green-600 btn hover:bg-green-700" onClick={() => dispatch(CheckOut())}>Check Out</button>
                            <button type="button" className="text-white bg-red-600 btn hover:bg-red-700" onClick={() => clearHandler()}>Clear</button>
                        </div>
                    </section>
                </div>
            }

            {/* ALERT MESSAGE WHEN SHOPPING CART IS EMPTY */}

            {!checkOut && itemsCounter === 0 &&
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-center text-red-500">Shopping Cart Is Empty!</h3>
                    <hr />
                    <h3>Want To Buy?</h3>
                    <Link to='/products' className="flex text-white bg-green-500 btn hover:bg-green-600">Back To Shop
                        <img src={ShoppingBag} alt="bag icon" className="ml-2" />
                    </Link>
                </div>
            }

            {/* SUCCESSFULLY CHECK OUT MESSAGE */}
            {checkOut &&
                <div className="flex flex-col items-center justify-center">
                    <h3 className="flex items-center mb-6">Check Out Successfully <FaCheck className="ml-2 text-green-500" /></h3>
                    <Link to='/products' className="flex text-white bg-green-500 btn hover:bg-green-600">
                        Buy More
                        <img src={ShoppingBag} alt="bag icon" className="ml-2" />
                    </Link>
                </div>}

        </div>
    );
}

export default ShoppingCart;