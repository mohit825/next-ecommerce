import { useContext } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setcartItem] = useState([]);
  // const [counter, setCouter] = useState(0);

  // const increment = () => {
  //   console.log("called counter");
  //   setCouter(counter + 1);
  // };

  const addToCart = (productToAdd) => {
    console.log(productToAdd);
    setcartItem((prevItem) => [...prevItem, { ...productToAdd }]);
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

//Custom hook for Cart Context
export const useCart = () => {
  const all = useContext(CartContext);
  return all;
};
