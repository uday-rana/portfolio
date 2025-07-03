import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.github.com/uday-rana" target="_blank">
          <Image src="/github-mark-white.svg" alt="GitHub logo" height={24} width={24} />
        </a>
        <a href="https://www.linkedin.com/in/uday-rana" target="_blank">
          <Image className="invert" src="/linkedin.svg" alt="LinkedIn logo" height={24} width={24} />
        </a>
      </nav>
    </footer>
  );
}
