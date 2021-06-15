import Carousel from "../ui/carousel";

export default function Home({ banners }) {
  return (
    <>
      <Carousel banners={banners} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/banners");
  const banners = await res.json();
  if (!banners) {
    return { notFound: true };
  }

  return {
    props: {
      banners: banners,
    },
  };
};
