import UserAccessContainer from "../../components/UserAccessContainer/UserAccessContainer";
import { Section } from "../../styles/styled-component/UserAccessStyle";
import LoginForm from "../../components/LoginFormContainer/LoginForm";
const Signin = () => {
  return (
    <Section>
      <UserAccessContainer
        title="Login"
        description="Get access to your Orders, Wishlist and Recommendations"
      ></UserAccessContainer>
      <LoginForm />
    </Section>
  );
};
export default Signin;