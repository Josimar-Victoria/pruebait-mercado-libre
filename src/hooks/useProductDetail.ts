import { useEffect, useState } from 'react';
import axios from 'axios';

interface ProductDetail {
  id: string;
  title: string;
  permalink: string;
  thumbnail: string;
  description: string;
  pictures: { id: string; url: string }[];
  dateCreated: string;
  price: number; // Agrega la propiedad dateCreated al tipo ProductDetail
}

const useProductDetail = (id?: string) => {
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      if (!id) {
        return;
      }

      setLoading(true);
      try {
        const [productResponse, descriptionResponse] = await Promise.all([
          axios.get(`https://api.mercadolibre.com/items/${id}`),
          axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        ]);
        const productData = productResponse.data;
        const descriptionData = descriptionResponse.data;
        const product: ProductDetail = {
          id: productData.id,
          title: productData.title,
          permalink: productData.permalink,
          thumbnail: productData.thumbnail,
          description: descriptionData.plain_text,
          pictures: productData.pictures,
          price: productData.price,
          dateCreated: new Date(productData.date_created).toLocaleString('es-AR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
        };
        setProductDetail(product);
      } catch (error) {
        console.error('Error al obtener el detalle del producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  return { productDetail, loading };
};

export default useProductDetail;
