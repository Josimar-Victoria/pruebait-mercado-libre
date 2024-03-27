import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate en lugar de useHistory
import useMercadoLibreAPI from "../../hooks/useMercadoLibreAPI"; // Importamos nuestro hook personalizado
import './SearchBox.css'

const SearchBox: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const {fetchData } = useMercadoLibreAPI();
  const navigate = useNavigate(); // Utiliza useNavigate para la navegación

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await fetchData(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`);
      // Redirige a la página de resultados de búsqueda con la consulta de búsqueda como parámetro de consulta
      navigate(`/search?query=${searchQuery}`); // Utiliza navigate en lugar de history.push
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  return (
    <div className="search-box-container">
     <Link to='/'>
     <img src='https://blog.saleslayer.com/hubfs/mercado-libre-logo.jpg' alt="Logo de la empresa" className="company-logo" />
     </Link>
      <form onSubmit={handleSearch} className="search-form">
        <div className="input-container">
          <input 
            type="text" 
            name="searchQuery" 
            placeholder="Nunca dejes de buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <FaSearch className="search-icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
