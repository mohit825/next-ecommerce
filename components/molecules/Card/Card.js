import ProductName from "../../atoms/ProductName/ProductName";
import ProductImage from "../../atoms/ProductImage/ProductImage";
import CardActionContainer from "../CardActionContainer/CardActionContainer";
const Card = ({ product }) => {
  return (
    <>
      <ProductName>{product.name}</ProductName>
      <div className="mb-design">
        <ProductImage
          src={product.imageURL}
          description={product.description}
        />
        <CardActionContainer
          product={product}
          price={product.price}
          name={product.name}
        />
      </div>
    </>
  );
};

export default Card;
