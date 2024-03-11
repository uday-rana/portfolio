export default function Experience() {
  return (
    <div className="grid lg:grid-cols-8 lg:gap-x-28 mx-4 lg:mx-20 my-8">
      <div className="col-span-2 prose prose-lg mb-6">
        <h2 id="experience">Experience</h2>
      </div>
      <div className="col-span-6 prose max-w-none w-full flex flex-col">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <h3 className="my-0">
              <a
                href="https://www.ontario.ca/page/ministry-children-community-and-social-services"
                className="no-underline hover:text-neutral-400"
                target="_blank"
              >
                Government of Ontario - Ministry of Community, Children, &
                Social Services
              </a>
            </h3>
            <h4>Application Programmer (Co-op)</h4>
          </div>
          <div>
            <p className="prose prose-sm my-0">
              <span className="whitespace-nowrap">2023 Sep -</span> 2024 Apr
            </p>
          </div>
        </div>
        <p>
          I was part of the development team of an AI-powered chatbot using
          Python, OpenAI, and LangChain to automate document parsing, web
          scraping, and report generation, significantly improving efficiency. I
          also developed a responsive web application with Flask to automate
          form filling and simplify enterprise architecture reviews, leading to
          substantial time savings. Throughout these projects, I collaborated
          closely with clients to ensure accurate documentation and alignment to
          requirements, while also optimizing software development processes
          through CI/CD pipelines and designing intuitive UI mock-ups for
          enhanced user experience.
        </p>
      </div>
    </div>
  );
}
