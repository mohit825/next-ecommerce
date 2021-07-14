import styled from "styled-components";

export const LowestOfferStyle = styled.div`
  background-color: #fff;
  display: flex;
  padding: 10px;

  .pl-40 {
    padding-left: 40px;
  }
`;

export const CartSubmitBtnStyle = styled(LowestOfferStyle)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  .center {
    text-align: center;
    padding: 10px;
  }
`;
