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
          <strong>An AI-powered tabletop gaming content generator built for creative storytelling and game mastering</strong>
          <br /><br />
          This full-stack application leverages cutting-edge AI models to generate dynamic tabletop RPG content while fostering a vibrant community of creators. Users can generate characters, locations, quests, and maps with AI assistance, then share their creations, build collections, and engage with other creators through a comprehensive social platform featuring likes, comments, and collaborative content curation. 
          <br /><br />
          <strong>Key Features:</strong>
          <ul>
            <li><strong>AI-Powered Content Generation:</strong> Utilizes Cloudflare Workers AI with Llama 3.2 for text generation and Stable Diffusion XL for image creation across multiple asset types (characters, locations, quests, maps)</li>
            <li><strong>Comprehensive Social Platform:</strong> Full-featured community system with user profiles, asset sharing, like/comment functionality, and curated collections for organizing and discovering content</li>
            <li><strong>Advanced Content Management:</strong> Flexible visibility controls (public, private, unlisted), detailed user profiles with bios, and collection building</li>
            <li><strong>Modern Full-Stack Architecture:</strong> Next.js TypeScript frontend with Express backend, featuring secure authentication and real-time content delivery</li>
            <li><strong>Production-Ready Infrastructure:</strong> Containerized deployment with Docker, comprehensive environment configuration, and automated CI/CD pipelines</li>
          </ul>
          <strong>Technical Highlights:</strong>
          <ul>
            <li>Built comprehensive social features including user-generated collections, community engagement through likes/comments, and content discovery mechanisms</li>
            <li>Implemented secure authentication flow using Supabase Auth with JWT token verification and granular privacy controls</li>
            <li>Designed scalable RESTful API architecture with complete OpenAPI specification, rate limiting, CORS protection, and comprehensive logging</li>
            <li>Created responsive, accessible UI with TailwindCSS optimized for both content creation and social interaction workflows</li>
          </ul>
          <strong>Technologies:</strong> TypeScript, Next.js, Express, Prisma, PostgreSQL, Supabase, Cloudflare Workers AI, Docker, TailwindCSS, AWS S3, GitHub Actions 
        </Project>

        <Project
          id={3}
          name="Order Management API"
          repoLink="https://github.com/uday-rana/order-service"
        >
          <strong>An order management web service built with modern .NET architecture</strong>
          <br />
          <br />
          This REST API provides comprehensive order processing capabilities through a secure, scalable RESTful API. Built using ASP.NET Core with enterprise-grade patterns, it handles order lifecycle management, data persistence, and authentication with production-ready reliability.
          <br />
          <br />
          <strong>Key Features:</strong>
          <ul>
            <li><strong>Complete Order Management:</strong> Full CRUD operations for order creation, tracking, and status updates</li>
            <li><strong>Enterprise Security:</strong> JWT-based authentication integration with Auth0 for secure API access</li>
            <li><strong>Containerized Deployment:</strong> Docker Compose configuration for consistent development and deployment environments</li>
            <li><strong>Database Agnostic:</strong> Configurable database connection supporting multiple database providers</li>
          </ul>
          <strong>Technical Highlights:</strong>
          <ul>
            <li>Implemented clean API architecture following RESTful principles for maintainable and scalable code</li>
            <li>Integrated enterprise authentication using Auth0 JWT tokens for secure multi-tenant access</li>
            <li>Built with modern .NET practices leveraging ASP.NET Core&apos;s performance and cross-platform capabilities</li>
          </ul>
          <strong>Technologies:</strong> C#, ASP.NET Core, Entity Framework, Docker
        </Project>
      </div>
    </div>
  );
}
