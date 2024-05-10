import Image from "next/image";

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
                src="http://localhost:3000/img/category-1.jpg"
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
                src="http://localhost:3000/img/category-3.jpg"
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
                src="http://localhost:3000/img/category-4.jpg"
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
                src="http://localhost:3000/img/category-2.jpg"
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
