import styled from "styled-components";

export const Overlay = styled.section`
  position: fixed; /* Sit on top of the page content */
  display: ${({ modal }) => (modal ? "block" : "none")};
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  /* cursor: pointer; */
`;

export const CartContainer = styled.div`
  background: aliceblue;
  width: 50%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 35%;
  display: flex;
  flex-direction: column;

  .cart-access {
    background-color: #101b24;
    padding: 15px;
    color: white;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    .cross {
      cursor: pointer;
    }
  }

  .no-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
  }

  .cart-btn {
    width: 100%;
    font-size: 20px;
  }
  .product-display {
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const CartProductContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  margin: 10px 0 15px 10px;

  .product-image {
    width: 70px;
    object-fit: contain;
    padding: 8px;
  }
  .product-name {
    margin-bottom: 5px;
  }
  .product-access {
    display: flex;
    justify-content: space-evenly;
  }
  .item-group {
    flex-grow: 2;
    width: 25%;
  }
  .calc-price {
    flex-grow: 1;
    padding-bottom: 6px;
    align-self: flex-end;
    text-align: center;
  }
`;
