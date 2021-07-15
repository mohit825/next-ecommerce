import UserAccessContainer from "../../components/molecules/UserAccessContainer/UserAccessContainer";
import { Section } from "../../components/molecules/UserActionContainer/UserAccessStyle";
import LoginForm from "../../components/organisms/LoginFormContainer/LoginForm";
import Head from "next/head";
const Signin = () => {
  return (
    <>
      <Head>
        <title>SignIn Page</title>
        <meta name="description" content="Login to Purchase Products" />
      </Head>
      <Section>
        <UserAccessContainer
          title="Login"
          description="Get access to your Orders, Wishlist and Recommendations"
        ></UserAccessContainer>
        <LoginForm />
      </Section>
    </>
  );
};
export default Signin;
