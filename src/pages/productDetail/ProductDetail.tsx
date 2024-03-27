import React from "react";
import {  useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import ProductImages from "../../components/productImages/ProductImages";
import Loading from "../../components/loading/Loading";
import "./ProductDetail.css"; // Importa tu archivo CSS de estilos

const ProductDetail: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const { productDetail, loading } = useProductDetail(id);

  if (loading) {
    return <Loading/>; // Aplica un estilo de carga centrado
  }

  if (!productDetail) {
    return (
      <div className="error">No se pudo cargar el detalle del producto.</div>
    ); // Aplica un estilo de error
  }

  return (
    <div className="product-detail">
     <div className="product-container">
     <h2 className="title">{productDetail.title}</h2>
      <div className="">
        <ProductImages pictures={productDetail.pictures} />
        <div className="button-container">
          <p className="price">
            {productDetail.price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
            })}
          </p>
          <a
            href={productDetail.permalink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Comprar</button>
          </a>
        </div>
      </div>
      <div className="description-section">
        <h3 className="section-title">Descripción del producto</h3>
        <p className="description">{productDetail.description}</p>
        <p className="date">
          Fecha de publicación: {productDetail.dateCreated}
        </p>
      </div>
      <a
        href={productDetail.permalink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en Mercado Libre
      </a>
     </div>
    </div>
  );
};

export default ProductDetail;
