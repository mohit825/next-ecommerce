import FormInfoContainer from "./FormInfoContainer";
import FormInfoDescription from "./FormInfoDescription";
import FormInfoTitle from "./FormInfoTitle";
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
