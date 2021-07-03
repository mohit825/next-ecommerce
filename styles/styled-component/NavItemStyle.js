import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  padding: 15px;
  border-bottom: 2px solid #b1b1b1;
  cursor: pointer;

  /* background-color: ${({ clicked }) =>
    clicked ? "var(--primary-clr)" : null}; */

  &:hover {
    background-color: var(--primary-clr);
    color: white;
    transition: all 0.7s;
  }
`;
