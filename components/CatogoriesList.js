import CategoryBanner from "../ui/CategoryBanner";
import { useState, useEffect } from "react";
import CategoriesNav from "../ui/CategoriesNav";
import { orderCategories } from "../utils/helperFunctions";
import { Navigation } from "../styles/styled-component/CategoryNavStyle";

const CategoriesList = ({ categories, isNavigation, setCategory }) => {
  const [scroll, setScroll] = useState(false);
  const evenfunction = () => {
    if (window.scrollY > 80) {
      console.log("scrolled");
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", evenfunction);
    return () => {
      window.removeEventListener("scroll", evenfunction);
    };
  }, []);
  const orderedCategories = orderCategories(categories);
  const selectedCategory = (id) => {
    setCategory(id);
  };
  const NavigationBar = (
    <Navigation scroll={scroll}>
      {orderedCategories.map((category) => {
        return (
          <CategoriesNav
            key={category.id}
            name={category.name}
            id={category.id}
            order={category.order}
            categorySelect={selectedCategory}
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
