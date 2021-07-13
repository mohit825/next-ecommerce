import { ProductImg } from "../../styles/styled-component/CategoryStyle";
import { ProductImageContainer } from "../../styles/styled-component/CategoryStyle";
const ProductImage = ({ src, description }) => {
  return (
    // <figure>
    <div className="tb-design">
      {/* <ProductImageContainer> */}
      <ProductImg src={src} alt={description} />
      <div className="img-caption">{description}</div>
    </div>
    // </ProductImageContainer>
    // </figure>
  );
};

export default ProductImage;
