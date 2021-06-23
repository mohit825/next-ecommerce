import { ProductImg } from "../../styles/styled-component/CategoryStyle";
import { ProductImageContainer } from "../../styles/styled-component/CategoryStyle";
const ProductImage = ({ src, description }) => {
  return (
    // <figure>
    <>
      {/* <ProductImageContainer> */}
      <ProductImg src={src} alt={description} />
      <div className="img-caption">{description}</div>
    </>
    // </ProductImageContainer>
    // </figure>
  );
};

export default ProductImage;
