import React from 'react'
import FlashCard from './FlashCard'
import productsData from '../../utils/productsData'

// Define una interfaz para el tipo de objeto en productItems
interface Product {
    id: number;
    discount: number;
    cover: string;
    name: string;
    price: number;
  }

  
function FlashDeals() {

    // Especifica el tipo de productItems como un array de objetos de tipo Product
  const products: Product[] = productsData.productItems;
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Ofertas relámpago</h1>
          </div>
          {/* Pasa productItems al componente FlashCard */}
          <FlashCard productItems={products} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
