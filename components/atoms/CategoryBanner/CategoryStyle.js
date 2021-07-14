import styled from "styled-components";

export const Img = styled.img`
  /* height: 350px; */
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
    flex-grow: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* .explore-btn {
    background: #c2383d;
    width: fit-content;
    color: white;
    padding: 14px;
  } */
  .desc {
    margin: 5px 0 25px 0;
  }
`;

export const ProductImg = styled(Img)`
  height: 178px;
  width: auto;
  object-fit: contain;
  padding: 0 0 10px 0;
  @media screen and (max-width: 560px) {
    /* margin-right: 10px; */
    /* height: 125px; */
    grid-row: 1/-1;
    width: 94%;
    padding: 0;
  }

  @media screen and (min-width: 530px) and (max-width: 800px) {
    height: 125px;
    margin-right: 10px;
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
