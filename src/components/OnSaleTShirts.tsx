import "../styles/OnSaleTShirts.css";
import { useEffect, useState } from "react";


const OnSaleTShirts = () => {
    const[products, setProducts] = useState([]);
    const productsCount = 4;
    useEffect(() => {
        fetch("../../public/helpers/products.json")
        .then(response => response.json())
        .then(data => {
            const onSaleProduct = data.filter(s => s.onSale).slice(0, productsCount);
            setProducts(onSaleProduct)
        })
    })
    return (
        <section className="sale-tshirts-section">
            <h4 className="section-subtitle">Summer Collection</h4>
            <h2 className="section-title">On Sale T-Shirts</h2>
            <div className="product-container">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="image-container">
                            <img src={product.image} alt={product.name} />
                            <span className="discount-badge">{product.discount}</span>
                            {/* Icons for quick view & cart */}
                            <div className="product-icons">
                                <span className="icon">🛒</span>
                                <span className="icon">👁</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <span className="category">{product.category}</span>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="price">{product.price.new}</p>
                            <div className="color-options">
                                {product.colors.map((color, index) => (
                                    <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
                                ))}
                            </div>
                            <div className="size-options">
                                {["XS", "S", "M", "L", "XL"].map((size, index) => (
                                    <span key={index} className="size-box">{size}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OnSaleTShirts;
