import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <>
      <h1>{product.title}</h1>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
