import React from "react";
import Button from "../../components/button/Button";
import "./style.scss";
const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-sm-12 responsive-order1">
                <div className="text-wrapper">
                  <h2>
                    Время обновлений и расширений границ вместе с MUHABBAT ZIYO
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque dictum nec ac enim ullamcorper risus tempor, posuere
                    purus.
                  </p>
                  <Button txt="Оставить заявку" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 responsive-order2">
                <div className="img-wrapper">
                  <img
                    src="https://picsum.photos/906/377"
                    className="img-hero"
                    alt="hero bg img"
                  />
                </div>
              </div>
              <div className="icons-wrapper">
                <ul className="list-icons">
                  <li className="item-icons">
                    <a href="#">
                      <i class="bi bi-telegram"></i>
                    </a>
                  </li>
                  <li className="item-icons">
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li className="item-icons">
                    <a href="#">
                      <i class="bi bi-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="school-info">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12 mx-auto responsive-order-info">
                <ul className="list-icons">
                  <li className="item-icons">
                    <a href="#">
                      <i class="bi bi-telegram"></i>
                    </a>
                  </li>
                  <li className="item-icons">
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li className="item-icons">
                    <a href="#">
                      <i class="bi bi-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                <div className="radios d-flex">
                  <h4>aylana</h4>
                  <h4>aylana</h4>
                  <h4>aylana</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
