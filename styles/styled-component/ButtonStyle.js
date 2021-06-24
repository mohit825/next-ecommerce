import styled from "styled-components";
export const FlatButton = styled.button`
  background: var(--primary-clr);
  width: ${({ type }) => (type === "longBtn" ? "50%" : "fit-content")};
  color: white;
  padding: 14px;
  cursor: pointer;
  border: none;
`;

export const ProductPageButton = styled(FlatButton)`
  padding: 10px 20px;
`;
