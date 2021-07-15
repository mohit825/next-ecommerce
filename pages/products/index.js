import { fetchfromURI } from "../../utils/api-service";
// import CategoriesList from "../../components/CatogoriesList";
import CategoriesList from "../../components/organisms/CategoriesList/CatogoriesList";
import ProductsList from "../../components/organisms/ProductsList/ProductsList";
import { ProductPageContainer } from "../../components/molecules/Card/ProductPageContainerStyle";
import { useState } from "react";
import { filterProductFromCategory } from "../../utils/helperFunctions";
import { useCart } from "../../context/CartContext";
import DropDown from "../../components/atoms/DropDown/DropDown";
import Head from "next/head";
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
      <Head>
        <title>Products Page</title>
        <meta
          name="description"
          content="Browse through our wide range of products"
        />
      </Head>
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
