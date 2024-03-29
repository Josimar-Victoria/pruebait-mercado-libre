import DiscountCard from "./DiscountCard";

function Discount() {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>Grandes descuentos</h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <DiscountCard />
        </div>
      </section>
    </>
  );
}

export default Discount;
