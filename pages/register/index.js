import UserAccessContainer from "../../components/molecules/UserAccessContainer/UserAccessContainer";
import { Section } from "../../components/molecules/UserActionContainer/UserAccessStyle";
import RegisterForm from "../../components/organisms/RegisterFormContainer/RegisterForm";
const Register = () => {
  return (
    <Section>
      <UserAccessContainer
        title="Signup"
        description="We do not share your details with anyone"
      ></UserAccessContainer>
      <RegisterForm />
    </Section>
  );
};
export default Register;
