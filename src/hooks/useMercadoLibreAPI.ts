import  { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

const useMercadoLibreAPI = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      // Modificar la URL para agregar el parámetro de consulta 'limit' para obtener solo 4 resultados
      const modifiedUrl = `${url}&limit=4`;
      const response: AxiosResponse<any> = await axios.get(modifiedUrl);
      setData(response.data);
      setError(null);
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchData };
};

export default useMercadoLibreAPI;
