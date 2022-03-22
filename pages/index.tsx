import { GetStaticProps, InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";

const Home = ({ products }: InferGetStaticPropsType<GetStaticProps>) => {
  return <div>{JSON.stringify(products)}</div>;
};

export default Home;

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}
