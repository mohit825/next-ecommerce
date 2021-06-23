import { fetchfromURI } from "../../utils/api-service";
import CategoriesList from "../../components/CatogoriesList";
import ProductsList from "../../components/ProductsList";
import { ProductPageContainer } from "../../styles/styled-component/ProductPageContainerStyle";
const ProductsListingPage = ({ categories, products }) => {
  return (
    <>
      <ProductPageContainer>
        <CategoriesList isNavigation={true} categories={categories} />
        <main className="product-container">
          <ProductsList products={products} />
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
