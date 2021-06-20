import { FlatButton } from "../styles/ButtonStyle";
const Button = ({ children }) => {
  return (
    <FlatButton>
      <div className="explore-flat-btn">{children}</div>
    </FlatButton>
  );
};

export default Button;
