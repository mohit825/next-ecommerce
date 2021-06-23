import CategoryBanner from "../ui/CategoryBanner";
import CategoriesNav from "../ui/CategoriesNav";
import { orderCategories } from "../utils/helperFunctions";
import { Navigation } from "../styles/styled-component/CategoryNavStyle";

const CategoriesList = ({ categories, isNavigation }) => {
  const orderedCategories = orderCategories(categories);

  const NavigationBar = (
    <Navigation>
      {orderedCategories.map((category) => {
        return (
          <CategoriesNav
            key={category.id}
            name={category.name}
            id={category.id}
            order={category.order}
          />
        );
      })}
    </Navigation>
  );

  const Banner = orderedCategories.map((category) => {
    return (
      <CategoryBanner
        key={category.id}
        name={category.name}
        image={category.imageUrl}
        description={category.description}
        order={category.order}
        isEnabled={category.enabled}
        categoryKey={category.key}
      />
    );
  });

  return isNavigation ? NavigationBar : Banner;
};

export default CategoriesList;
