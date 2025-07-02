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
          name="Blob Storage Microservice"
          repoLink="https://github.com/uday-rana/fragments"
          imageSrc="/fragments-architecture-diagram.avif"
        >
          <strong>
            A cloud-native file storage solution built for scalability and reliability
          </strong>
          <br />
          <br />
          This microservice provides secure text and image storage capabilities
          with intelligent content processing. Built using modern cloud
          architecture patterns, it handles file uploads, automatic format
          conversions, and serves content through a RESTful API.
          <br />
          <br />
          <strong>Key Features:</strong>
          <ul>
            <li><strong>Multi-format Support:</strong> Automatically converts between Markdown/HTML, CSV/JSON/YAML, and various image formats</li>
            <li><strong>Cloud-Native Architecture:</strong> Leverages AWS services (S3, DynamoDB, ECS) for scalability and reliability</li>
            <li><strong>Security First:</strong> JWT authentication via Amazon Cognito</li>
            <li><strong>Production Ready:</strong> 95% unit test coverage, full integration tests, containerized deployment, and CI/CD pipeline integration</li>
          </ul>
          <strong>Technical Highlights:</strong>
          <ul>
            <li>Reduced client-side processing requirements through server-side content conversion</li>
            <li>Implemented comprehensive monitoring and logging for production debugging</li>
            <li>Designed for horizontal scaling using container orchestration</li>
          </ul>
          <strong>Technologies:</strong> Node.js, Express, AWS (S3, DynamoDB, ECS, Cognito), Docker, Jest, GitHub Actions
        </Project>
        
        <Project
          id={2}
          name="RPG Content Hub"
          repoLink="https://github.com/tabletop-generator"
          demoLink="https://ttg-client-web.tabletop-generator.workers.dev"
          imageSrc="/rpg-content-hub-screenshot.avif"
        >
          A social platform for generating and discovering AI-generated content
          for role-playing games for inspiration and quick iteration.
        </Project>
        <Project
          id={3}
          name="Order Management API"
          repoLink="https://github.com/uday-rana/order-service"
        >
          A secure REST API with JWT authentication, Swagger documentation, and
          containerized deployment.
        </Project>
      </div>
    </div>
  );
}
