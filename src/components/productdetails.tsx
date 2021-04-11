import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Product {
    productid: number;
    productname: string;
    description: string;
    price: number;
    quantities: number;
}

export function ProductList() {
    const [posts, setPosts] = useState<Product>({
        productid: 0,
        productname: "",
        description: "",
        price: 0,
        quantities: 0,
    
    });

    useEffect(() => {
        (async () => {
            axios
                .get<Product>("http://localhost:3000/products/${Number.parseInt(id)}")
                .then((res) => res.data)
                .then((data) => {
                    setPosts(data);
                })
                
        })();
    }, []);
    
    return (
        <div className="container">
        <div className="my-4">
            <h1>Product details</h1>
        </div>
        <div className="row mt-2">
            <div className="col-2">
                <h5><strong>Name</strong></h5>
            </div>
            <div className="col-10">
                <span>{posts.productname}</span>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-2">
                <h5><strong>Description</strong></h5>
            </div>
            <div className="col-10">
                <span>{posts.description}</span>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-2">
                <h5><strong>Price</strong></h5>
            </div>
            <div className="col-10">
                <span>{posts.price.toLocaleString()} VND</span>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-2">
                <h5><strong>Quantities</strong></h5>
            </div>
            <div className="col-10">
                <span>{posts.quantities}</span>
            </div>
        </div>
        <div className="row mt-4">
                <Link className="offset-2" to="/products">Back</Link>
            </div>
        </div>
    );
}
export default ProductList;