export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h1>E Shop</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sollicitudin rutrum massa. Suspendisse
                  sollicitudin rutrum massa. Vestibulum porttitor, metus sed
                  pretium elementum, nisi nibh sodales quam, non lobortis neque
                  felis id mauris.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Get in Touch</h3>
                <div className="contact-info">
                  <p>
                    <i className="fa fa-envelope"></i>email@example.com
                  </p>
                  <p>
                    <i className="fa fa-phone"></i>+123-456-7890
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p
          className="copyright"
          style={{ textAlign: "center", padding: "0 20px" }}
        >
          Copyright &copy; All Rights Reserved. Powered by{" "}
          <a href="https://portfolio-armen.vercel.app/en" target="_blank">
            Armen Martirosyan
          </a>
          .
        </p>
      </div>
    </>
  );
}
