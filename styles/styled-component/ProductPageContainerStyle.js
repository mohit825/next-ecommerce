import styled from "styled-components";

export const ProductPageContainer = styled.section`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 560px) {
    flex-direction: column;
    nav {
      display: none;
    }
    .product-container {
      margin: 0 !important;
      width: 100% !important;
    }
  }
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

  @media screen and (max-width: 560px) {
    flex-basis: 100%;

    .tb-design {
      display: grid;
      grid-column-start: 1;
      grid-column-end: -1;
      grid-template-rows: 100% 100%;
      grid-template-columns: 50% 50%;
    }
    .img-caption {
      height: 100px !important;
    }
    .mb-design {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 100px 100px;
    }
    .tb-cardAction {
      grid-column: 2/-1;
      align-self: center;
    }
  }

  @media screen and (min-width: 560px) and (max-width: 800px) {
    flex-basis: 47%;

    .tb-design {
      display: flex;
    }
    .img-caption {
      height: 100px !important;
    }

    .tb-cardAction {
      margin: 10px 0;
    }
  }

  @media screen and (min-width: 801px) {
    .tb-cardAction {
      display: none;
    }
  }

  .img-caption {
    font-size: 12px;
    background-color: var(--grey-clr);
    padding: 5px;
    height: 70px;
    overflow: hidden;
    line-height: 1.4;
  }
`;

export const HeadingContainer = styled.h5`
  margin: 0;
  height: 50px;

  @media screen and (min-width: 530px) and (max-width: 800px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    overflow: hidden;
  }
`;

export const CardActionStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  @media screen and (max-width: 800px) {
    display: none;
  }

  @media screen and (min-width: 530px) and (max-width: 800px) {
    .tb-btn {
      display: block;
    }
  }
`;
