import Project from "./Project";

export default function Projects() {
  return (
    <div className="prose max-w-none mx-4 lg:mx-20 my-8">
      <div className="prose-lg text-center mb-6">
        <h2 id="projects">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <Project
          id={1}
          name="Seinfeld Chat Bot"
          imageSrc="/kramerbot.avif"
          repoLink="https://github.com/uday-rana/seinfeldBot"
        >
          A bot for the &lsquo;Discord&rsquo; chat platform which responds as
          characters from the TV series &lsquo;Seinfeld&rsquo;. Can also respond
          with quotes based on filters such as author, season, and episode.
        </Project>
        <Project
          id={2}
          name="Blog Engine"
          imageSrc="/blog.avif"
          demoLink="https://usrana-blog.cyclic.app/"
          repoLink="https://github.com/uday-rana/blog"
        >A blog engine allowing users to sign up and publish posts.</Project>
        <Project
          id={3}
          name="Museum Art Gallery Viewer"
          imageSrc="/artapp.avif"
          demoLink="https://art-app-iota.vercel.app/"
        >A dynamic Next.js web app for browsing the art collection from the Metropolitan Museum of Art.</Project>
      </div>
    </div>
  );
}
