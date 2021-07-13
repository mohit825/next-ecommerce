import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  height: 40px;
  background-color: var(--primary-clr);
  color: white;
  margin-bottom: 10px;

  @media screen and (min-width: 561px) {
    display: none;
  }
`;
