import styled from "styled-components";

export const ProductPageContainer = styled.section`
  display: flex;
  flex-direction: row;

  .product-container {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-left: 20%;
  }

  :last-child {
    justify-content: start;
  }
`;

export const ArticleContainer = styled.article`
  flex-basis: 23%;
  flex-grow: 0;
  padding: 20px;
  box-shadow: 5px 0px 9px 2px rgba(184, 184, 184, 0.75);
  -webkit-box-shadow: 5px 0px 9px 2px rgba(184, 184, 184, 0.75);
  -moz-box-shadow: 5px 0px 9px 2px rgba(184, 184, 184, 0.75);
  margin-bottom: 50px;

  .img-caption {
    font-size: 12px;
    background-color: var(--grey-clr);
    padding: 5px;
    height: 70px;
    overflow: hidden;
  }
`;

export const HeadingContainer = styled.h5`
  margin: 0;
  height: 50px;
`;

export const CardActionStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;
