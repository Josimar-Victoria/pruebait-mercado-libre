import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useMercadoLibreAPI from "./useMercadoLibreAPI";

interface SearchResult {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  permalink: string;
  name: string;
}

interface Filter {
  id: string;
  path_from_root: { name: string }[];
}

const useSearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const { data, fetchData } = useMercadoLibreAPI();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [offset, setOffset] = useState(0); // Estado para rastrear el número de resultados cargados

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchQuery) {
          setSearchResults([]); // Limpiar los resultados anteriores al iniciar una nueva búsqueda
          await fetchData(
            `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&offset=${offset}`
          );
        }
      } catch (error) {
        console.error("Error al obtener los resultados de búsqueda:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery, offset]); // Incluir offset en las dependencias para que se actualice cuando cambie

  useEffect(() => {
    if (data && data.results) {
      const uniqueResults = filterUniqueResults(data.results);
      setSearchResults((prevResults) => [...prevResults, ...uniqueResults]); // Agregar los nuevos resultados a los resultados existentes
    }

    if (data && data.filters) {
      const categoryFilter = data.filters.find(
        (filter: Filter) => filter.id === "category"
      );
      if (categoryFilter) {
        const subcategories: string[] = [];
        categoryFilter.values.forEach((value: { path_from_root: { name: string }[] }) => {
          if (value.path_from_root) {
            value.path_from_root.forEach((subCategory: { name: string }) => {
              subcategories.push(subCategory.name);
            });
          }
        });
        setCategories(subcategories);
      }
    }
  }, [data]);

  // Función para cargar más resultados cuando se haga clic en el botón
  const loadMoreResults = () => {
    setOffset((prevOffset) => prevOffset + 4); // Incrementar el offset para cargar más resultados
  };

  // Función para filtrar resultados únicos basados en el ID
  const filterUniqueResults = (results: SearchResult[]) => {
    const uniqueIds = new Set(searchResults.map((result) => result.id)); // Obtener un conjunto de IDs únicos
    return results.filter((result) => !uniqueIds.has(result.id)); // Filtrar solo los resultados con IDs que no estén en el conjunto
  };

  return { loading: !data, error: !data ? "No hay datos" : "", searchResults, categories, searchQuery, loadMoreResults, data };
};

export default useSearchResults;
