import Navbar from "./Navbar";
import { useParams } from 'react-router-dom'; 
import Footer from "./Footer";
import React, { useState, useEffect } from "react"; 

const ProductPage = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product/productdetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Error fetching product details");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchProduct(); // Call the async function

  }, []);

  const handleme = () => {
    console.log(id);
    console.log(product);
  };

  return (
    <>
      <Navbar />

      <div style={{ position: "relative", top: "100px", height: "867px" }}>
        {loading ? (
          <p>Loading...</p>
        ) : product ? (
          <div>
            <img
              style={{
                position: "relative",
                width: "30%",
                height: "50%",
                right: "-4%",
                top: "6%",
              }}
              alt="Product Image"
              src={product.url}
            ></img>
      
            <div
              style={{
                position: "absolute",
                right: "32%",
                top: "11%",
                fontSize: "50px",
              }}
            >
              {product.name}
            </div>
            <div
              style={{
                position: "absolute",
                right: "10%",
                top: "20%",
                fontSize: "22px",
                width: "48%",
                height: "28%",
              }}
            >
              <p>{product.description}</p>
              <a>{product.price}</a>
            </div>
            <div>
              <button
                onClick={handleme}
                type="button"
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  right: "47%",
                  top: "50%",
                  fontSize: "22px",
                  width: "10%",
                  height: "6%",
                }}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  right: "34%",
                  top: "50%",
                  fontSize: "22px",
                  width: "10%",
                  height: "6%",
                }}
              >
                Buy Now
              </button>
              <a style={{ position: "absolute", right: "10%", top: "10%" }}>
                Rating
              </a>
            </div>
          </div>
        ) : (
          <p>Error fetching product details</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
