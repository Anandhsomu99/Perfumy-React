
import one from "../assets/images/img-1.jpg";
import two from '../assets/images/img-3.jpg';
import three from '../assets/images/img-2.jpg';



function Products() {
  return (
    <div class="container">
      <div class="product">
        <img src={one} alt="Products"></img>
        <p>Fogg Sandal wood perfume, Long lasting 100ml</p>
      </div>

      <div class="product">
        <img src={two} alt="Products"></img>
        <p>Fogg Sandal wood perfume, Long lasting 100ml</p>
      </div>

      <div class="product">
        <img src={three} alt="Products"></img>
        <p>Fogg Sandal wood perfume, Long lasting 100ml</p>
      </div>
    </div>
  )
}

export default Products