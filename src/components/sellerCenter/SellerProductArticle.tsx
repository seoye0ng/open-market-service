import styled from 'styled-components';
import Button from '../common/Buttons/Button';
import { Product } from '../../@types/types';

interface SellerProductArticleProps {
  item: Product;
  key: number;
}

export default function SellerProductArticle({ item }: SellerProductArticleProps) {
  return (
    <SSellerProductArticle>
      <div className="product-info-wrapper">
        <img src={item.image} alt="" />
        <div className="product-name-stock">
          <p>{item.product_name}</p>
          <span>재고 : {item.stock}</span>
        </div>
      </div>
      <p>{item.price.toLocaleString()}원</p>
      <div className="btn-box">
        <Button padding="10px 0" fontSize="var(--font-size-ml)" fontWeight="var(--font-weight-light)">
          수정
        </Button>
      </div>
      <div className="btn-box">
        <Button padding="10px 0" fontSize="var(--font-size-ml)" fontWeight="var(--font-weight-light)">
          삭제
        </Button>
      </div>
    </SSellerProductArticle>
  );
}

const SSellerProductArticle = styled.article`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid var(--middle-gray-color);

  p {
    font-size: var(--ont-size-lg);
  }

  .product-info-wrapper {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    gap: 1.875rem;
    padding-left: 1.875rem;
    box-sizing: border-box;

    img {
      width: 4.375rem;
      height: 4.375rem;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid var(--light-gray-color);
    }

    .product-name-stock {
      p {
        margin-bottom: 0.625rem;
      }

      span {
        color: var(--dark-gray-color);
      }
    }
  }

  & > p:nth-child(2) {
    flex-basis: 30%;
    text-align: center;
  }

  & > div:nth-child(3),
  & > div:last-child {
    flex-basis: 10%;
    padding: 0 0.3rem;
    box-sizing: border-box;
  }

  .btn-box {
    text-align: center;

    button {
      max-width: 5rem;
    }
  }
`;