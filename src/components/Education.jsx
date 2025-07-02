export default function Education() {
  return (
    <div className="grid lg:grid-cols-4 lg:gap-x-28 mx-4 lg:mx-20 my-8">
      <div className="col-span-1 prose prose-lg mb-6">
        <h2 id="education">Education</h2>
      </div>
      <div className="col-span-3 prose max-w-none w-full flex flex-col">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <h3 className="my-0">
              <a
                href="https://www.senecapolytechnic.ca/home.html"
                className="no-underline hover:text-neutral-400"
                target="_blank"
              >
                Seneca Polytechnic
              </a>
            </h3>
            <h4>
              <a
                href="https://www.senecapolytechnic.ca/programs/fulltime/CPA.html"
                className="no-underline hover:text-neutral-400"
                target="_blank"
              >
                Computer Programming &amp; Analysis
              </a>
            </h4>
          </div>
          <div>
            <p className="prose prose-sm my-0">
              <span className="whitespace-nowrap">2022 Jan -</span> 2025 Apr
            </p>
          </div>
        </div>
        <p>
          <strong>Courses</strong>
          <br />
          Data Structures and Algorithms, Web Programming for Apps & Services,
          Advanced Database Services, Software Analysis and Design,
          Object-oriented Software Development using C++, Web Programming Tools
          and Frameworks, Introduction to C, Introduction to Unix/Linux,
          Introduction to Object-oriented Programming, Web Programming
          Principles, Introduction to Database Systems
        </p>
      </div>
    </div>
  );
}
