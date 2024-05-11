import {
  Banner,
  Categories,
  Features,
  Footer,
  Header,
  RecentProducts,
  TopHeader,
} from "@/components/home-page-components";

export default function Home() {
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
