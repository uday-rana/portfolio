import Image from "next/image";
import githubLogo from "@/../public/github-mark-white.svg";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.github.com/uday-rana" target="_blank">
          <Image src={githubLogo} alt="GitHub logo" height={24} width={24} />
        </a>
      </nav>
    </footer>
  );
}
