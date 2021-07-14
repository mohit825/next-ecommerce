import { ListItem } from "./NavItemStyle";
const NavItem = ({ children, categoryClicked, id, selected }) => {
  return (
    <ListItem selected={selected} onClick={categoryClicked}>
      {children}
    </ListItem>
  );
};

export default NavItem;
