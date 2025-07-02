"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav({ children }) {
  const [isNavbarPastTarget, setIsNavbarPastTarget] = useState(false);

  useEffect(() => {
    // This handles the nav background becoming solid after scrolling.
    // On displays below sm breakpoint, transparent nav text and hero text overlap.
    // To circumvent, on small displays background will be triggered early.
    let isLargeDisplay = window.matchMedia("(min-width: 768px)").matches;

    function handleScroll() {
      const navbarBottom = document
        .querySelector("#navbar")
        .getBoundingClientRect().bottom;

      let trigger;

      if (isLargeDisplay) {
        trigger = document
          .querySelector("#hero")
          .getBoundingClientRect().bottom;
      } else {
        trigger = document
          .querySelector("#herotext")
          .getBoundingClientRect().top;
      }

      setIsNavbarPastTarget(navbarBottom > trigger);
    }

    if (isLargeDisplay) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isLargeDisplay) {
        window.removeEventListener("scroll", () => {
          handleScroll("#hero");
        });
      } else {
        window.removeEventListener("scroll", () => {
          handleScroll("#herotext");
        });
      }
    };
  }, []);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div
          className={`w-full fixed transition-colors ${
            isNavbarPastTarget
              ? "bg-base-300"
              : "bg-transparent text-neutral-content"
          } top-0 navbar z-10`}
          id="navbar"
        >
          <div className="flex-1 px-2 mx-2 text-xl select-none">Uday Rana</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-2">
              {/* Navbar menu content */}
              {/* Using && or || to resolve className results in the booleans being passed
              as classNames and it throws an error, hence the use of the ternary operator. */}
              <li>
                <Link
                  href="#top"
                  className={
                    isNavbarPastTarget ? "" : "focus:text-neutral-content"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className={
                    isNavbarPastTarget ? "" : "focus:text-neutral-content"
                  }
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#education"
                  className={
                    isNavbarPastTarget ? "" : "focus:text-neutral-content"
                  }
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className={
                    isNavbarPastTarget ? "" : "focus:text-neutral-content"
                  }
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={
                    isNavbarPastTarget ? "" : "focus:text-neutral-content"
                  }
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      {/* Sidebar */}
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 justify-center text-lg">
          {/* Sidebar content */}
          {/* Setting tabindex to -1 for these drawer Links breaks smooth scrolling when using them. */}
          <li>
            <Link
              href="#top"
              className="py-5 justify-center"
              onClick={() => {
                document.querySelector("#my-drawer").checked = false;
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="py-5 justify-center"
              onClick={() => {
                document.querySelector("#my-drawer").checked = false;
              }}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="py-5 justify-center"
              onClick={() => {
                document.querySelector("#my-drawer").checked = false;
              }}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="py-5 justify-center"
              onClick={() => {
                document.querySelector("#my-drawer").checked = false;
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="py-5 justify-center"
              onClick={() => {
                document.querySelector("#my-drawer").checked = false;
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
