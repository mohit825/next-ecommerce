import { CartProductContainer } from "../../styles/styled-component/Popup";
const CartProduct = ({ items }) => {
  console.log(items, "items");
  return items.map((item) => {
    return (
      <CartProductContainer key={item.id}>
        <img className="product-image" src={item.imageURL} />
        <div>
          <h5>{item.name}</h5>
        </div>
      </CartProductContainer>
    );
  });
};

export default CartProduct;
