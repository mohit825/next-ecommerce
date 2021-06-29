import { ListItem } from "../styles/styled-component/NavItemStyle";
const NavItem = ({ children, categoryClicked }) => {
  return <ListItem onClick={categoryClicked}>{children}</ListItem>;
};

export default NavItem;
