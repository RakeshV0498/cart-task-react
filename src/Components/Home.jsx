import { CartState } from "../Context";

const Home = () => {
  const { state } = CartState();
  console.log(state);
  return <div>Home</div>;
};

export default Home;
