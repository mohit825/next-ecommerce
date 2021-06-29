import NavItem from "./NavItem";

const CategoriesNav = ({ name, id, order, categorySelect }) => {
  const categoryClickHandler = () => {
    categorySelect(id);
  };
  return order > 0 ? (
    <NavItem categoryClicked={categoryClickHandler}>{name}</NavItem>
  ) : null;
};

export default CategoriesNav;
