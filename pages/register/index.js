import UserAccessContainer from "../../components/UserAccessContainer/UserAccessContainer";
import { Section } from "../../styles/styled-component/UserAccessStyle";
import RegisterForm from "../../components/RegisterFormContainer/RegisterForm";
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
