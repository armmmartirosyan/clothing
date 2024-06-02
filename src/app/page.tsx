import { JSX, Suspense } from "react";
import {
  Banner,
  Categories,
  Features,
  Footer,
  NewProducts,
  Header,
} from "@/components/home-page-components";

export default function Home(): JSX.Element {
  return (
    <div className="page_wrapper">
      <Header />
      <Suspense fallback={"Loading banner..."}>
        <Banner />
      </Suspense>
      <Features />
      <Suspense fallback={"Loading categories..."}>
        <Categories />
      </Suspense>
      <Suspense fallback={"Loading new products..."}>
        <NewProducts />
      </Suspense>
      <Footer />
    </div>
  );
}
