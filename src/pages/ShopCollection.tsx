import React from "react";
import productImage1 from "../assets/PopularImages/product.jpg";
import productImage2 from "../assets/PopularImages/product-03.jpg";
import productImage3 from "../assets/PopularImages/product-09-a-600x731.jpg";
import productImage4 from "../assets/PopularImages/product-2.jpg";

const products = [
    { id: 1, name: "Summer Dress", price: "$49.99", image: productImage1 },
    { id: 2, name: "Elegant Blazer", price: "$79.99", image: productImage2 },
    { id: 3, name: "Casual Sneakers", price: "$59.99", image: productImage3 },
    { id: 4, name: "Trendy Handbag", price: "$39.99", image: productImage4 },
];


const ShopCollection = () => {
    return (
        <div className="container shop-collection">
            {/* <h1 className="text-center">Shop Collection</h1> */}
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3 col-sm-6 col-12 mb-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopCollection;