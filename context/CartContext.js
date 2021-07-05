import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setcartItem] = useState([]);
  const [modal, setModal] = useState(false);
  // let flag = false;

  // const addToCart = (productToAdd) => {
  //   console.log(productToAdd);
  //   productToAdd["quantity"] = 1;
  //   // setcartItem((prevItem) => [...prevItem, { ...productToAdd }]);
  //   setcartItem((prevItem) => {
  //     console.log(prevItem, "ye prevItem hai");
  //     prevItem.map((prod) => {
  //       if (prod.id === productToAdd.id) {
  //         productToAdd["quantity"] = productToAdd["quantity"] + 1;
  //         flag = true;
  //       } else {
  //         flag = false;
  //       }
  //     });
  //     return [...prevItem, { ...productToAdd }];
  //   });
  // };

  const addToCart = (productToAdd) => {
    let obj = productToAdd;
    obj["quantity"] = 1;

    setcartItem((prevItem) => {
      return [...prevItem, obj];
    });
  };

  // useEffect(() => {
  //   manageCart();
  // }, [cartItem]);

  // const manageCart = () => {
  //   console.log(cartItem, "id");
  //   cartItem.reduce()
  // };

  const closePopup = () => {
    setModal(false);
  };

  const openPopup = () => {
    setModal(true);
  };

  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, modal, openPopup, closePopup }}
    >
      {children}
    </CartContext.Provider>
  );
};

//Custom hook for Cart Context
export const useCart = () => {
  const all = useContext(CartContext);
  return all;
};
