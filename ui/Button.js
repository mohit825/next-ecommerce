import { FlatButton } from "../styles/ButtonStyle";
const Button = ({ children }) => {
  return (
    <FlatButton>
      <button className="explore-flat-btn">{children}</button>
    </FlatButton>
  );
};

export default Button;
