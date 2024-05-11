import { stringUtils } from "@/utils/string-utils";
import Image from "next/image";

export function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="logo">
              <a href="">
                <Image
                  width={500}
                  height={500}
                  src={stringUtils.normalizeImageSrc("images/logo.png")}
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="search">
              <input type="text" placeholder="Search" />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
