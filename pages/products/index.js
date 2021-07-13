import { fetchfromURI } from "../../utils/api-service";
import CategoriesList from "../../components/CatogoriesList";
import ProductsList from "../../components/ProductsList";
import { ProductPageContainer } from "../../styles/styled-component/ProductPageContainerStyle";
import { useState } from "react";
import { filterProductFromCategory } from "../../utils/helperFunctions";
import { useCart } from "../../context/CartContext";
import DropDown from "../../components/DropDown/DropDown";

const ProductsListingPage = ({ categories, products }) => {
  const { categorySelectedFromClick } = useCart();
  const [allProducts, setAllProducts] = useState(products);
  const categorySelected = (id) => {
    const filteredProducts = filterProductFromCategory(id, products);
    setAllProducts(filteredProducts);
    categorySelectedFromClick(id);
  };

  return (
    <>
      <ProductPageContainer>
        <DropDown categories={categories} setCategory={categorySelected} />
        <CategoriesList
          isNavigation={true}
          categories={categories}
          setCategory={categorySelected}
        />
        <main className="product-container">
          <ProductsList products={allProducts} />
        </main>
      </ProductPageContainer>
    </>
  );
};

export default ProductsListingPage;

export const getStaticProps = async () => {
  const categories = await fetchfromURI("categories");
  const products = await fetchfromURI("products");
  return {
    props: {
      categories,
      products,
    },
  };
};
