import { fetchfromURI } from "../../utils/api-service";
import CategoriesList from "../../components/CatogoriesList";
import ProductsList from "../../components/ProductsList";
const ProductsListingPage = ({ categories }) => {
  return (
    <>
      <CategoriesList isNavigation={true} categories={categories} />
      <ProductsList />
    </>
  );
};

export default ProductsListingPage;

export const getStaticProps = async () => {
  const categories = await fetchfromURI("categories");
  return {
    props: {
      categories,
    },
  };
};
