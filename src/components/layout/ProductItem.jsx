import React from 'react';
import styled from 'styled-components';
import ProductInfoDetail from './ProductInfoDetail';
import { useNavigate } from 'react-router-dom';

export default function ProductItem({ productList }) {
  const navigate = useNavigate();

  return (
    <ProductListContainerStyle>
      {productList &&
        productList.map((product) => {
          return (
            <li key={product.product_id} onClick={() => navigate(`/product/${product.product_id}`, { state: product })}>
              <ProductInfoDetail product={product} />
            </li>
          );
        })}
    </ProductListContainerStyle>
  );
}

const ProductListContainerStyle = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px;

  /* .img-box {
    overflow: hidden;
    width: 380px;
    height: 380px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info-box {
    margin-top: 16px;
    font-weight: 400;
    font-size: 16px;

    p:not(:last-child) {
      margin-bottom: 10px;
    }

    .store-name {
      color: #767676;
    }

    .product-name {
      font-size: 18px;
      line-height: 22px;
    }

    .product-price strong {
      margin-right: 2px;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
    }
  } */
`;
