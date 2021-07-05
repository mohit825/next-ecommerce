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
  width: 30%;
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
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

export const CartProductContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;

  .product-image {
    width: 70px;
    object-fit: contain;
    padding: 8px;
  }
`;
