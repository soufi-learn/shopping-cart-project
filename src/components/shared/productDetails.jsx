import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import shorten from "../../helper/shorten";
import { DefaultLoading } from "./loader";

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // GET CURRENT PRODUCT AND ITS INFORMATIONS
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => {
                if (res.data !== '') {
                    setLoading(false);
                    setProduct(res.data);
                } else {
                    setError('product not found!');
                    setLoading(false);
                }
            });
    }, []);


    return (<div className="container z-0 flex items-center justify-center p-4 pt-10 bg-white lg:-translate-x-1/2 lg:top-0 lg:pt-20 lg:fixed lg:h-screen lg:left-1/2">

        {product &&
            <div className="grid items-center w-10/12 gap-6 mx-auto">
                <div className=" lg:col-start-1 lg:col-end-4">
                    <img src={product.image} alt={shorten(product.title)} className="w-3/6 mx-auto mb-4 lg:w-auto lg:mr-4" />
                </div>
                <div className="lg:col-start-4 lg:col-end-12">
                    <h3 className="font-bold text-center lg:text-start">{shorten(product.title)}</h3>
                    <hr />
                    <p className="mb-4 text-xl text-slate-600">{product.description}</p>
                    <p className="text-blue-600">{product.category}</p>
                    <hr />
                    <div className="flex items-center justify-between">
                        <h5>Price:{product.price}$</h5>
                        <Link to='/products' className="text-white bg-blue-500 border-blue-700 btn hover:bg-blue-600">Back To Shop</Link>
                    </div>
                </div>
            </div>}

        {loading &&
            <DefaultLoading />
        }

        {error && <h3 className="w-full text-center text-red-600">{error}</h3>}
    </div>);
}

export default ProductDetails;