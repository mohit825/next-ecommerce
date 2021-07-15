import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: var(--grey-clr);
  width: 20%;
  list-style: none;
  height: 100vh;
  float: left;
  position: fixed;
  top: ${({ scroll }) => (scroll ? 0 : "auto")};
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

/* flex-direction: ${({ order }) => (order % 2 === 0 ? "row-reverse" : "row")} */
