import FormInfoContainer from "../../molecules/FormContainer/FormInfoContainer";
import FormInfoDescription from "../../atoms/FormDescription/FormInfoDescription";
import FormInfoTitle from "../../atoms/FormTitle/FormInfoTitle";
const UserAccessContainer = ({ title, description }) => {
  return (
    <>
      <FormInfoContainer>
        <FormInfoTitle>{title}</FormInfoTitle>
        <FormInfoDescription>{description}</FormInfoDescription>
      </FormInfoContainer>
    </>
  );
};

export default UserAccessContainer;
