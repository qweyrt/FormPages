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
export function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            setProducts(await (await axios
                .get<Product[]>("http://localhost:3000/products")
                .then())
                .data
            );
        })();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">Product ID</th>
                            <th className="text-center">Product Name</th>
                            <th className="text-center">Description</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantities</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map(product =>
                            <tr key={product.productid}>
                                <th className="text-center" scope="row">{product.productid}</th>
                                <td>{product.productname}</td>
                                <td>{product.description}</td>
                                <td className="text-center">{product.price!.toLocaleString()} VND</td>
                                <td className="text-center">{product.quantities}</td>
                                <td className="text-center">
                                    <Link to={`/product-details/${product.productid}`}>Details</Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}