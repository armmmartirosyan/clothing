import { JSX } from "react";
import { notFound } from "next/navigation";
import { getProductById } from "@/actions/products-actions";
import { type ProductPageProps } from "@/types/component-types";
import { Footer, Header } from "@/components/home-page-components";
import { RelatedProducts } from "@/components/product-details-page-components";

export default async function Product({
  params,
}: ProductPageProps): Promise<JSX.Element> {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="breadcrumb-wrap">
        <div className="container">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/products">Products</a>
            </li>
            <li className="breadcrumb-item active">{params.id}</li>
          </ul>
        </div>
      </div>

      <div className="product-detail">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="row align-items-center product-detail-top">
                <div className="col-md-5">
                  <div className="product-slider-single">
                    <img src={product.imageUrl} alt={product.name} />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="product-content">
                    <div className="title">
                      <h2>{product.name}</h2>
                    </div>
                    <div className="price">
                      {product.price}AMD <br />
                      {!!product.oldPrice && <span>{product.oldPrice}AMD</span>}
                    </div>
                    <div className="details">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <RelatedProducts categoryId={product.categoryId} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
