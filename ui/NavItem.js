import { ListItem } from "../styles/styled-component/NavItemStyle";
const NavItem = ({ children, categoryClicked, id, selected }) => {
  return (
    <ListItem selected={selected} onClick={categoryClicked}>
      {children}
    </ListItem>
  );
};

export default NavItem;
