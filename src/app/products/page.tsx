import { JSX } from "react";
import { OnlyPageSearchParams } from "@/types/component-types";
import { getListingProducts } from "@/actions/products-actions";
import { getProductsPageSearchParams } from "@/utils";

export default async function Products({
  searchParams,
}: OnlyPageSearchParams): Promise<JSX.Element> {
  const { page, search, categoryIds } =
    getProductsPageSearchParams(searchParams);

  const { products, pageCount } = await getListingProducts({
    categoryIds,
    search,
    page,
  });

  return (
    <>
      <div className="breadcrumb-wrap">
        <div className="container">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Products</a>
            </li>
            <li className="breadcrumb-item active">product list</li>
          </ul>
        </div>
      </div>

      <div className="product-view">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="product-search">
                        <input type="email" value="Search" />
                        <button>
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-short">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Product short by
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              Newest
                            </a>
                            <a href="#" className="dropdown-item">
                              Popular
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="col-lg-4" key={product.id}>
                    <div className="product-item">
                      <div className="product-image">
                        <a href="product-detail.html">
                          <img src={product.imageUrl} alt="Product Image" />
                        </a>
                        <div className="product-action">
                          <a href="#">
                            <i className="fa fa-search"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="title">
                          <a href="#">{product.name}</a>
                        </div>
                        <div className="price">
                          $22 <span>$25</span>
                        </div>
                        {product.categoryId}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-lg-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-md-3">
              <div className="sidebar-widget category">
                <h2 className="title">Category</h2>
                <ul>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                    <span>(83)</span>
                  </li>
                  <li>
                    <a href="#">Cras sagittis</a>
                    <span>(198)</span>
                  </li>
                  <li>
                    <a href="#">Vivamus</a>
                    <span>(95)</span>
                  </li>
                  <li>
                    <a href="#">Fusce vitae</a>
                    <span>(48)</span>
                  </li>
                  <li>
                    <a href="#">Vestibulum</a>
                    <span>(210)</span>
                  </li>
                  <li>
                    <a href="#">Proin phar</a>
                    <span>(78)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
