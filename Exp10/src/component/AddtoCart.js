import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function AddtoCart() {
    const location = useLocation();
    const { firstname } = location.state || {};
    const [productNames, setProductNames] = useState([]);
    const [products, setproducts] = useState([]);
    const [productDetailsArray, setProductDetailsArray] = useState([]); // Initialize as an empty array
    console.log(productDetailsArray);
    useEffect(() => {
        const fetchProductsByFirstName = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/addtocart/getByFirstName",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            firstname: firstname,
                        }),
                    }
                );
                const data = await response.json();

                const productNamesArray = data.products.map(product => product.product);
                setProductNames(productNamesArray);
                setproducts(data.products);

                // After setting productNames, call fetchProductDetails with the productNames
                fetchProductDetails(productNamesArray);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchProductDetails = async (productIds) => {
            try {
                const productDetailsArray = [];

                for (const productId of productIds) {
                    const response1 = await fetch(
                        `http://localhost:5000/api/product/productdetails/${productId}`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    const data1 = await response1.json();
                    console.log(data1);
                    if (!data1.error) {
                        productDetailsArray.push(data1.product);
                    } else {
                        console.error(data1.error);
                    }
                }

                // Update the productDetailsArray state with the fetched product details
                setProductDetailsArray(productDetailsArray);
            } catch (error) {
                console.error(error);
            }
        };

        // Call the fetchProductsByFirstName function when the component mounts
        fetchProductsByFirstName();
    }, [firstname]);

    return (
        <>
            <div>
                <p>First Name: {firstname}</p>
                <h2>Products for {firstname}:</h2>
                <ul>
                    {productNames.map((productName, index) => (
                        <li key={index}>{productName}</li>
                    ))}
                </ul>

                <h2>Product Details:</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {productDetailsArray.map((product, index) => (
    <tr key={index}>
        <td><img src={product?.url || 'fallbackImageUrl'} alt={product?.name || 'Product Name'} /></td>
        <td>{product?.name || 'Product Name'}</td>
        <td>{product?.price || 'Price'}</td>
        <td>{product?.quantity || 'Quantity'}</td>
    </tr>
))}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AddtoCart;
