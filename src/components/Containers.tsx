import "../App.css";
import "../styles/containers.css";
import lady from "../assets/lady.png";
import OnSaleTShirts from "./OnSaleTShirts";
import ReviewSection from "./ReviewSection";
import React, { useEffect, useState } from "react";
import collection from "../assets/collection-02.jpg";
import collection1 from "../assets/collection-01.jpg";
import modelImage from "../assets/collection-03.jpg"




const Containers = () => {
    const [products, setProducts] = useState([]);
    const productsCount = 4;
    useEffect(() => {
        fetch("../../public/helpers/products.json")
            .then(response => response.json())
            .then(data => {
                const popularProducts = data.filter(p => p.isPopular).slice(0, productsCount);
                setProducts(popularProducts)
            })
            .catch(error => console.error("Error loading products:", error));
    }, []);
    return (
        <>
            {/* Hero Content */}
            <div className="container-fluid container-bg-image">
                <div className="row">
                    <div className="col-sm-6 container-left-text-section">
                        <h6>WOMEN</h6>
                        <h1>Slick. Modern. Awesome.</h1>
                        <button className="shop-btn">Shop Collection</button>
                    </div>
                    <div className="col-sm-6 container-right-img">
                        <div className="lady-bg"></div>
                        <img src={lady} alt="lady" />
                    </div>
                </div>
            </div>

            {/* Popular Products Section */}
            <div className="container">
                <div className="popular-products mt-5">
                    <h6 className="heading text-center">Summer Collection</h6>
                    <h1 className="popular-t-shirt text-center mb-4">Popular T-Shirts</h1>
                    <div className="row">
                        {products.map((product) => (
                            <>
                                {console.log("product---", product)}
                                <div key={`product-${product.id}`} className="col-md-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <img src={product.image} className="card-img-top" alt={product.name} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.price.old}</p>

                                            {/* Color Options (Safeguarded) */}
                                            {product.colors && product.colors.length > 0 ? (
                                                <div className="colors">
                                                    <strong>Colors:</strong>
                                                    <div className="color-options">
                                                        {product.colors.map((color, index) => (
                                                            <span key={index} className="color-box" style={{ backgroundColor: color }}></span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : null}

                                            {/* Size Options (Displayed as Boxes) */}
                                            {product.sizes && product.sizes.length > 0 ? (
                                                <div className="sizes mt-2">
                                                    <strong>Sizes:</strong>
                                                    <div className="size-options">
                                                        {product.sizes.map((size, index) => (
                                                            <span key={index} className="size-box">{size}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : null}

                                            <button className="btn btn-popoular mt-4">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>

            {/* Men Collection */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={collection} alt="men" className="img-fluid centered-img" />
                        <h6 className="men-heading mt-4">MEN</h6>
                        <h2 className="subheading">The base collection - Ideal every day.</h2>
                        <button className="btn btn-men mt-3">SHOP NOW</button>
                    </div>
                    <div className="col-md-6">
                        <img src={collection1} alt="men" className="img-fluid centered-img" />
                    </div>
                </div>
            </div>

            {/*Overlay Section*/}
            <div className="container-fluid fixed-bg-section mt-4">
                <div className="overlay-content">
                    <h6 className="new-heading">NEW COLLECTION</h6>
                    <h2 className="new-subheading">Be different in your own way!</h2>
                    <h4 className="desc-title">Find your unique style.</h4>
                    <button className="btn btn-overlay">Shop Collection</button>
                </div>
            </div>

            {/*WOMEN Section*/}
            <div className="women-collection-section">
                <div className="women-collection-container">
                    {/* Left Side - Image */}
                    <div className="women-image">
                        <img src={modelImage} alt="Spring Summer Collection" />
                    </div>

                    {/* Right Side - Text */}
                    <div className="women-content">
                        <span className="collection-category">Women</span>
                        <h2 className="collection-title">Spring Summer Collection</h2>
                        <p className="collection-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut id leo tempor, congue justo at, lobortis orci.
                            Aliquam venenatis dui lectus, eu convallis turpis convallis et. Pellentesque.
                        </p>
                        <button className="collection-button">See Whole Collection</button>
                    </div>
                </div>
            </div>
            {/*On sale Component*/}
            <OnSaleTShirts />

            {/** Review Section */}
            <ReviewSection />

            {/** Men and Women Section */}
                <div className="container mt-4">
                    <div className="row d-flex justify-content-center align-items-center gap-3"> 
                        {/* Men's Section */}
                        <div className="col-md-6 category men-bg">
                            <div className="category-overlay">
                                <h6>MEN</h6>
                                <p>5 PRODUCTS</p>
                            </div>
                        </div>

                        {/* Women's Section */}
                        <div className="col-md-6 category women-bg">
                            <div className="category-overlay">
                                <h6>WOMEN</h6>
                                <p>5 PRODUCTS</p>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default Containers;