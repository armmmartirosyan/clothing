import { JSX } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import styles from "./index.module.css";

export function Header(): JSX.Element {
  return (
    <div className="top-header">
      <div className="container">
        <div className={`row align-items-center ${styles.container}`}>
          <div className="col-md-3">
            <div className="logo">
              <a href="/">
                <Image
                  style={{ objectFit: "contain" }}
                  width={150}
                  height={60}
                  src={logo}
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
