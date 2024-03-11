export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/hero.avif)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row text-neutral-content">
        <div className="max-w-md">
          <p>Hi, I&apos;m</p>
          <h1 className="mb-5 text-5xl font-bold">Uday Rana.</h1>
          <p className="mb-5">
            I&apos;m a software developer dedicated to crafting elegant code and
            creating innovative solutions. I&apos;m always looking for
            opportunities to learn something new and to challenge myself.
          </p>
          <div className="flex gap-2">
            <a href="mailto:bc4w46yd7@mozmail.com" className="btn btn-primary">Contact me</a>
            <a href="/resume.pdf" download className="btn btn-secondary">View resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}
