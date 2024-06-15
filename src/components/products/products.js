import axios from "axios";
import React, { useState, useEffect } from "react";
import Image  from "../image/image";
import "./styles.css";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, status } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      console.log(data, "datadata");

      if (status === 200) {
        setProducts(data);
      } else {
        alert("API request was not successful");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3>Product List</h3>
      {products.length > 0 ? (
        <div className="product-list">
          {products.map((eachObject) => {
            const { id, title, price, description, category, image, rating } =
              eachObject;
            return (
              <div key={id} className="product-card">
                <h3 className="product-title">{title}</h3>
                <Image src={image} className="product-image" />
                <p className="product-category">
                  <strong>Category:</strong> {category}
                </p>
                <p className="product-price">
                  <strong>Price:</strong> ${price}
                </p>
                <p className="product-description">{description}</p>
                <p className="product-rating">
                  <strong>Rating:</strong> {rating.rate} ({rating.count}{" "}
                  reviews)
                </p>
              </div>
            );
          })}
        </div>
      ) : (
    <h2>loading....</h2>
      )}
    </>
  );
};

export default ProductListing;