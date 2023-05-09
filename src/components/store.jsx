import { React, useEffect } from "react";
import Product from './shared/product';
import { useSelector, useDispatch } from "react-redux";
import { MainLoading } from "./shared/loader";

// REDUX
import { fetchProducts } from "../redux/products/productsAction";

const Store = () => {

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.productsState);

    useEffect(() => {
        if (!products.length) {
            dispatch(fetchProducts());
        }
    }, []);

    return (
        <div>
            {products && !loading ?
                <div className="container grid justify-center gap-10 my-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map(data => <Product key={data.id} product={data} />)}
                </div> :
                <MainLoading />
            }

            {
                error && <div className="mt-16 text-center text-red-500 ">
                    <h3>{error}!</h3>
                </div>
            }
        </div >
    );
}

export default Store;