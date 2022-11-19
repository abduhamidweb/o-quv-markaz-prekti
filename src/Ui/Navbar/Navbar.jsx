import React from "react";
import "./style.scss";
import Logo from "../../assets/images/MUHABBAT ZIYO.png";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-blue">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={Logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav  mx-auto list-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Курсы
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Eng
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Polski
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  О нас
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Для детей
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Для родителей
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Блог
                </a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Рус
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Eng
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Polski
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
