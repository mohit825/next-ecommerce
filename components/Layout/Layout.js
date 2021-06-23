import FooterContainer from "../../ui/FooterContainer";

import MainNavigation from "./MainNavigation";
const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      <FooterContainer>
        Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.
      </FooterContainer>
    </>
  );
};
export default Layout;
