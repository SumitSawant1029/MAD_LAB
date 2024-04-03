import React, { useState } from 'react';
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Image>
        <Link to={`/productspage/${props.id}`}>
        <img  id={props.id} src={props.image} alt="" />
        </Link>
      </Image>
      <Description>
        <h3>{props.title}</h3>
        <p>₹{props.price}</p>
        <button  id={props.id} >Add to Cart</button>
      </Description>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;

const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 80%;
  height:80%;
  margin: auto;

  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h3 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #8AC7DB;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card