import CategoriesList from "../components/organisms/CategoriesList/CatogoriesList";
import { fetchfromURI } from "../utils/api-service";

import Carousel from "../components/atoms/Carousel/Carousel";

export default function Home({ banners, categories }) {
  return (
    <>
      <Carousel banners={banners} />
      <CategoriesList categories={categories} />
    </>
  );
}

export const getStaticProps = async () => {
  const banners = await fetchfromURI("banners");
  const categories = await fetchfromURI("categories");
  if (!banners) {
    return { notFound: true };
  }
  return {
    props: {
      banners: banners,
      categories: categories,
    },
  };
};
