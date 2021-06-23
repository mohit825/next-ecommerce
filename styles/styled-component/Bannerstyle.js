import Slider from "@ant-design/react-slick";
import styled from "styled-components";

const SliderWrapper = styled(Slider)`
  .custom-img {
    margin: auto;
    width: 100%;
    height: auto;
    transform: scale(0.8);
    -webkit-box-shadow: 0px 6px 6px 1px rgba(41, 36, 41, 0.72);
    -moz-box-shadow: 0px 6px 6px 1px rgba(41, 36, 41, 0.72);
    box-shadow: 0px 6px 6px 1px rgba(41, 36, 41, 0.72);
  }
  .slick-prev {
    left: 11% !important;
    z-index: 1;
    background: black !important;
    height: 30px !important;
    width: 30px !important;
    border-radius: 50% !important;
  }
  .slick-next {
    right: 11% !important;
    z-index: 1;
    background: black !important;
    height: 29px !important;
    width: 29px !important;
    border-radius: 50% !important;
  }

  .slick-dots {
    top: 261px;
  }
`;

export default SliderWrapper;
