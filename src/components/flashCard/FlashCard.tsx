import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define una interfaz para el tipo de objeto en productItems
interface Product {
    id: number;
    discount: number;
    cover: string;
    name: string;
    price: number;
  }

const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>
    );
};

const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-long-arrow-alt-left'></i>
        </button>
      </div>
    );
};

function FlashCard({productItems}: {productItems: Product[]}) {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((product: Product, index: number) => (
            <div className='box' key={index}>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{product.discount}% Off</span>
                  <img src={product.cover} alt='product-img' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{product.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${product.price}.00 </h4>
                    <button>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </Slider>
    </>
  );
}

export default FlashCard;
