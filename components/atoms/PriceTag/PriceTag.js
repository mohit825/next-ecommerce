const PriceTag = ({ children }) => {
  return (
    <p>
      <data value={children}>{`MRP Rs.${children}`}</data>
    </p>
  );
};

export default PriceTag;
