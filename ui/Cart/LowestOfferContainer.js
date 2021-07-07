import { LowestOfferStyle } from "../../styles/styled-component/LowestOfferStyle";
const LowestOfferContainer = () => {
  return (
    <LowestOfferStyle>
      <img src="/static/images/lowest-price.png" />
      <p className="pl-40">You won't find it cheaper anywhere</p>
    </LowestOfferStyle>
  );
};

export default LowestOfferContainer;
