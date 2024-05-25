import { JSX } from "react";
import {
  Banner,
  Categories,
  Features,
  Footer,
  Header,
  RecentProducts,
  TopHeader,
} from "@/components/home-page-components";

export default function Home(): JSX.Element {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <Features />
      <Categories />
      <RecentProducts />
      <Footer />
    </>
  );
}
