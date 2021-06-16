import CategoryBanner from "../ui/CategoryBanner";
import { orderCategories } from "../utils/helperFunctions";

const CategoriesList = ({ categories }) => {
  const orderedCategories = orderCategories(categories);
  return orderedCategories.map((category) => {
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
};

export default CategoriesList;
