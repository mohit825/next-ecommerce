import NavItem from "./NavItem";

const CategoriesNav = ({ name, id, order }) => {
  return order > 0 ? <NavItem>{name}</NavItem> : null;
};

export default CategoriesNav;
