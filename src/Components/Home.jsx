import { CartState } from "../Context";
import Product from "./Product";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <>
      <article className="home">
        <section className="product-container">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </section>
      </article>
    </>
  );
};

export default Home;
