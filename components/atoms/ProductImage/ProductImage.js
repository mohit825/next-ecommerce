import { ProductImg } from "../CategoryBanner/CategoryStyle";
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
