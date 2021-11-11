import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const [open, setOpen] = useState(false);
  const [ariaExp, setAriaExp] = useState(false);
  const router = useRouter();

  function menuHandler() {
    setOpen(!open);

    const nav = document.getElementById("primary-navigation");
    const menuMobile = document.querySelector(".mobile-nav-toggle");

    if (open) {
      nav.classList.add("menu-active");
      menuMobile.classList.add("deactivate-menu");
      setAriaExp(true);
    } else {
      nav.classList.remove("menu-active");
      menuMobile.classList.remove("deactivate-menu");
      setAriaExp(false);
    }
  }

  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <header className="primary-header flex">
        <div className="logo">
          <Image
            width={39}
            height={39}
            src="/assets/shared/logo.svg"
            alt="logo"
          />
        </div>
        <button
          onClick={menuHandler}
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
        >
          <span aria-expanded={ariaExp} className="sr-only">
            Menu
          </span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            className="primary-navigation underline-indicators flex"
          >
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/">
                <a className="ff-sans-cond uppercase text-white letter-spacing-2">
                  <span aria-hidden="true">00</span>Home
                </a>
              </Link>
            </li>
            <li className={router.pathname == "/destination" ? "active" : ""}>
              <Link href="/destination">
                <a className="ff-sans-cond uppercase text-white letter-spacing-2">
                  <span aria-hidden="true">01</span>Destination
                </a>
              </Link>
            </li>
            <li className={router.pathname == "/crew" ? "active" : ""}>
              <Link href="/crew">
                <a className="ff-sans-cond uppercase text-white letter-spacing-2">
                  <span aria-hidden="true">02</span>Crew
                </a>
              </Link>
            </li>
            <li className={router.pathname == "/technology" ? "active" : ""}>
              <Link href="/technology">
                <a className="ff-sans-cond uppercase text-white letter-spacing-2">
                  <span aria-hidden="true">03</span>Technology
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
