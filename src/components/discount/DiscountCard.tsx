import Slider from "react-slick";
import Ddata from "../../utils/discountData";

function DiscountCard() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value:any) => {
          return (
            <>
              <div className="box product" key={value.price}>
                <div className="img">
                  <img src={value.cover} alt="" width="100%" />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
}

export default DiscountCard;
