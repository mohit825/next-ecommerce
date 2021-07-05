import FooterContainer from "../../ui/FooterContainer";
import CartPopup from "../CartModal/CartPopup";
import MainNavigation from "./MainNavigation";
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
