import NavItem from "./NavItem";

const CategoriesNav = ({ name, id, order, categorySelect, selected }) => {
  const categoryClickHandler = () => {
    categorySelect(id);
  };
  return order > 0 ? (
    <NavItem selected={selected} id={id} categoryClicked={categoryClickHandler}>
      {name}
    </NavItem>
  ) : null;
};

export default CategoriesNav;
