import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { calculatePrice } from "../utils/helperFunctions";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [modal, setModal] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [category, selectedCategory] = useState("");
  const calculateCartItemLength = () => {
    let sum = 0;
    cartItem.forEach((prod) => {
      sum = sum + prod.quantity;
    });
    setCartLength(sum);
  };

  useEffect(() => {
    calculateCartItemLength();
    updateCartPrice();
  }, [cartItem]);

  const addToCart = (productToAdd) => {
    const present = cartItem.some((prod) => {
      return prod.id === productToAdd.id;
    });
    if (!present) {
      productToAdd["quantity"] = 1;
      setCartItem((prev) => {
        return [...prev, productToAdd];
      });
    } else {
      setCartItem((prev) => {
        prev.map((prod) => {
          if (prod.id === productToAdd.id) {
            prod.quantity++;
          }
        });
        return [...prev];
      });
    }
  };

  const closePopup = () => {
    setModal(false);
  };

  const openPopup = () => {
    setModal(true);
  };

  const incrementQuantity = (id) => {
    setCartItem((prev) => {
      prev.map((prod) => {
        if (prod.id === id) {
          prod.quantity += 1;
        }
      });
      return [...prev];
    });
  };

  const decrementQuantity = (id) => {
    setCartItem((prev) => {
      prev.map((prod) => {
        if (prod.id === id) {
          prod.quantity -= 1;
        }
      });
      const notZero = prev.filter((prod) => {
        return prod.quantity != 0;
      });
      return [...notZero];
    });
  };

  const updateCartPrice = () => {
    let sum = 0;
    cartItem.map((prod) => {
      sum = sum + calculatePrice(prod.price, prod.quantity);
    });
    setTotalCartPrice(sum);
  };

  const categorySelectedFromClick = (id) => {
    selectedCategory(id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        cartLength,
        modal,
        totalCartPrice,
        category,
        categorySelectedFromClick,
        addToCart,
        openPopup,
        closePopup,
        incrementQuantity,
        decrementQuantity,
      }}
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
