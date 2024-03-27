import React, { useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import useSearchResults from "../../hooks/useSearchResults";
import Loading from "../../components/loading/Loading";
import "./SearchResults.css";

const SearchResults: React.FC = () => {
  const {
    loading,
    error,
    searchResults,
    categories,
    searchQuery,
    loadMoreResults,
    data,
  } = useSearchResults();
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    await loadMoreResults(); // Esperar a que se carguen más resultados
    setLoadingMore(false);
  };

  console.log(data);

  return (
    <div className="search-results">
      <div className="">
        <p>{categories.join(" > ")}</p>
        <div className="search-container">
          <h2>Resultados de búsqueda para "{searchQuery}"</h2>
          {loading && <Loading />}
          {error && <div>Error: {error}</div>}
          <ul>
            {searchResults.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
          {loadingMore && <Loading />}{" "}
          {/* Mostrar carga adicional mientras se cargan más productos */}
          {!loading && !loadingMore && (
            <div className="paging-container">
              <button onClick={handleLoadMore} className="show-product">
                Ver más productos
              </button>
              <p>Total productos:{data.paging.total}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
