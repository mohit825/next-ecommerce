import { CartProductContainer } from "../CartProduct/Popup";
import { RoundButton } from "../../atoms/Button/ButtonStyle";
import { calculatePrice } from "../../../utils/helperFunctions";
import { useCart } from "../../../context/CartContext";

const CartProduct = ({ items }) => {
  const { incrementQuantity, decrementQuantity } = useCart();
  // console.log(items, "items");
  return items.map((item) => {
    return (
      <CartProductContainer key={item.id}>
        <img className="product-image" src={item.imageURL} />
        <div className="item-group">
          <h5 className="product-name">{item.name}</h5>
          <div className="product-access">
            <RoundButton onClick={() => decrementQuantity(item.id)}>
              -
            </RoundButton>
            <span>{item.quantity}</span>
            <RoundButton onClick={() => incrementQuantity(item.id)}>
              +
            </RoundButton>
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
