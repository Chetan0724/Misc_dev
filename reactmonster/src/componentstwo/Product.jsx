const Product = (props) => {
  return (
    <div>
      <h2>Product name: {props.name}</h2>
      <p>Product price: {props.price}</p>
    </div>
  );
};

export default Product;