import { CartProductContainer } from "../../styles/styled-component/Popup";
import { RoundButton } from "../../styles/styled-component/ButtonStyle";
import { calculatePrice } from "../../utils/helperFunctions";
const CartProduct = ({ items }) => {
  console.log(items, "items");
  return items.map((item) => {
    return (
      <CartProductContainer key={item.id}>
        <img className="product-image" src={item.imageURL} />
        <div className="item-group">
          <h5 className="product-name">{item.name}</h5>
          <div className="product-access">
            <RoundButton>-</RoundButton>
            <span>{item.quantity}</span>
            <RoundButton>+</RoundButton>
            <span>X Rs.{item.price}</span>
          </div>
        </div>
        <span className="calc-price">
          {calculatePrice(item.price, item.quantity)}
        </span>
      </CartProductContainer>
    );
  });
};

export default CartProduct;
