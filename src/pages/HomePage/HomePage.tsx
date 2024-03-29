import Categories from '../../components/categories/Categories'
import './HoemePage.css'
import Slider from '../../components/slideCard/Slider'
import FlashDeals from '../../components/flashCard/FlashDeals'
import Discount from '../../components/discount/Discount'

export default function HomePage() {
  return (
    <>
    <section className='home'>
      <div className='container d_flex'>
        <Categories />
        <Slider />
        {""}

      </div>
    </section>
  </>
  )
}
