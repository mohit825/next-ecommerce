import styled from "styled-components";

export const Img = styled.img`
  height: 350px;
  width: 30%;
  object-fit: contain;
  padding: 10px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: ${({ order }) => (order % 2 === 0 ? "row-reverse" : "row")};
  justify-content: space-between;
  margin: auto;
  width: 100%;
  height: auto;
  transform: scale(0.8);
  -webkit-box-shadow: 0px 6px 6px 1px rgba(41, 36, 41, 0.72);
  -moz-box-shadow: 0px 6px 6px 1px rgba(41, 36, 41, 0.72);
  box-shadow: 0px 6px 6px 1px rgba(41, 36, 41, 0.72);

  .info-container {
    display: flex;
    flex-direction: column;
  }

  .explore-btn {
    background: #c2383d;
    width: fit-content;
    color: white;
    padding: 14px;
  }
`;
