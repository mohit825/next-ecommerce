import FooterContainer from "../../atoms/FooterContainer/FooterContainer";
import CartPopup from "../CartPopup/CartPopup";
import MainNavigation from "../MainNavigation/MainNavigation";
const Layout = ({ children }) => {
  return (
    <>
      <CartPopup />
      <MainNavigation />
      <main>{children}</main>
      <FooterContainer>
        Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.
      </FooterContainer>
    </>
  );
};
export default Layout;
