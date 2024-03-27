import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

// Define la interfaz para las propiedades del componente ProductItem
interface ProductItemProps {
  product: {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
    permalink: string;
    name: string;
  };
}

// Define el componente ProductItem
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li className="product-item">
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} />
        </Link>
        <div className="text-info">
          <p>{product.title}</p>
          <p className="price">
            {product.price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
            })}
          </p>
          <p>Vendido por: {product.name}</p>
          <a href={product.permalink} target="_blank" rel="noopener noreferrer">
            Ver en Mercado Libre
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
