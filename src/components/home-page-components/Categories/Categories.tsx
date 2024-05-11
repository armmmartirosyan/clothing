import Image from "next/image";
import { stringUtils } from "@/utils/string-utils";

export function Categories() {
  return (
    <div className="category">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="category-img">
              <Image
                width={500}
                height={500}
                src={stringUtils.normalizeImageSrc("images/category-3.jpg")}
                alt="Category"
              />
              <a className="category-name" href="">
                <h2>Category Name</h2>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="category-img">
              <Image
                width={500}
                height={500}
                src={stringUtils.normalizeImageSrc("images/category-3.jpg")}
                alt="Category"
              />
              <a className="category-name" href="">
                <h2>Category Name</h2>
              </a>
            </div>
            <div className="category-img">
              <Image
                width={500}
                height={500}
                src={stringUtils.normalizeImageSrc("images/category-3.jpg")}
                alt="Category"
              />
              <a className="category-name" href="">
                <h2>Category Name</h2>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="category-img">
              <Image
                width={500}
                height={500}
                src={stringUtils.normalizeImageSrc("images/category-3.jpg")}
                alt="Category"
              />
              <a className="category-name" href="">
                <h2>Category Name</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
