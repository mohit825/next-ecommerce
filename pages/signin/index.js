import UserAccessContainer from "../../components/molecules/UserAccessContainer/UserAccessContainer";
import { Section } from "../../components/molecules/UserActionContainer/UserAccessStyle";
import LoginForm from "../../components/organisms/LoginFormContainer/LoginForm";
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
