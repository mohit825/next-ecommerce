import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import Layout from "../components/organisms/Layout/Layout";
import { CartProvider } from "../context/CartContext";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Head>
          <title>Sabka Bazar</title>
          <meta
            name="description"
            content="Get daily use items at reasonable price."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="keywords"
            content="Fruits, Vegetables, Bakery, Beverages, Beauty, Baby, Cakes"
          ></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
