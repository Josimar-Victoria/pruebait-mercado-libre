import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductImages.css'

interface ProductImagesProps {
  pictures: {
    id: string;
    url: string;
  }[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ pictures }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="product-images">
      <Slider {...settings}>
        {pictures.map((picture) => (
          <div key={picture.id}>
            <img className='img' src={picture.url} alt="Product" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImages;
