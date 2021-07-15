import Head from "next/head";
import UserAccessContainer from "../../components/molecules/UserAccessContainer/UserAccessContainer";
import { Section } from "../../components/molecules/UserActionContainer/UserAccessStyle";
import RegisterForm from "../../components/organisms/RegisterFormContainer/RegisterForm";
const Register = () => {
  return (
    <>
      <Head>
        <title>Register Yourself</title>
        <meta name="description" content="Register yourself on Sabka Bazar" />
      </Head>
      <Section>
        <UserAccessContainer
          title="Signup"
          description="We do not share your details with anyone"
        ></UserAccessContainer>
        <RegisterForm />
      </Section>
    </>
  );
};
export default Register;
