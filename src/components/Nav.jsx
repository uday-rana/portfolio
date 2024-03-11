/* Changing viewport size breaks smooth scrolling. */

import Link from "next/link";
export default function Nav({ children }) {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full sticky top-0 navbar bg-base-300 z-10">
          <div className="flex-1 px-2 mx-2 text-xl select-none">Uday Rana</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-2">
              {/* Navbar menu content here */}
              <li>
                <Link href="#top">Home</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#education">Education</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
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
          {/* Sidebar content here */}
          {/* Setting tabindex to -1 breaks smooth scrolling so don't do that for the navigation. */}
          <li>
            <Link href="#top" className="py-5 justify-center">Home</Link>
          </li>
          <li>
            <Link href="#experience" className="py-5 justify-center">Experience</Link>
          </li>
          <li>
            <Link href="#education" className="py-5 justify-center">Education</Link>
          </li>
          <li>
            <Link href="#projects" className="py-5 justify-center">Projects</Link>
          </li>
          <li>
            <Link href="#about" className="py-5 justify-center">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
