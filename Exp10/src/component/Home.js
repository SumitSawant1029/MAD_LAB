
import styled from "styled-components";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your /allproduct route
    axios.get('http://localhost:5000/api/product/allproduct')
      .then((response) => {
        // Set the products data in the state
        setProducts(response.data);
        setLoading(false);
        console.log(products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
        <Container>
          <Banner>
            <img src="./banner.jpg" alt="" />
          </Banner>
          <Main>
            {products.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                image={product.url}
                price={product.price}
                rating={product.rating}
                title={product.name}
              />
            ))}
          </Main>
        </Container>
  
      <Footer />
    </>
  );

}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  margin: auto;
  height: fit-content;
`;


const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
    rgba(255, 165, 0, 2),
    rgba(255, 255, 0),    
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.55),
    rgba(0, 0, 0, 0)
    );

    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;


  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
export default Home
