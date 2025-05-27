"use client";

import { BlogCard } from "@/components/blog";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export const blogPosts = [
  {
    "id": 1,
    "title": "API Gateway in Spring Boot Microservices: Patterns and Best Practices",
    "excerpt": "Explore the critical role of API Gateways in Spring Boot microservices architecture and best practices to build scalable, secure APIs.",
    "content": "In a microservices architecture, the API Gateway acts as a single entry point that manages client requests by routing them to appropriate microservices. When building microservices with Spring Boot, integrating an effective API Gateway is vital for simplifying client interactions, enhancing security, and enabling cross-cutting concerns like authentication, logging, and rate limiting.\n\n## Why Use an API Gateway?\n\nMicroservices decentralize functionality across multiple independently deployable services. While this offers scalability and flexibility, it complicates client communication. An API Gateway addresses this by:\n\n- **Request Routing:** Directing client requests to the correct microservice based on URI patterns or other criteria.\n- **Protocol Translation:** Converting between protocols such as HTTP and WebSocket.\n- **Aggregation:** Combining responses from multiple services into a single response.\n- **Security Enforcement:** Centralizing authentication and authorization mechanisms.\n- **Cross-Cutting Concerns:** Managing logging, metrics, rate limiting, and caching.\n\n## Spring Boot and API Gateway Solutions\n\nSpring Cloud Gateway is a popular, lightweight framework designed to work seamlessly with Spring Boot microservices. It provides a robust, non-blocking API Gateway built on Spring WebFlux, enabling high throughput and reactive programming models.\n\n## Best Practices for API Gateway Implementation\n\n1. **Keep It Thin:** The API Gateway should primarily handle request routing and common concerns, avoiding complex business logic.\n\n2. **Security First:** Centralize authentication and authorization at the gateway using OAuth2, JWT, or API keys.\n\n3. **Implement Rate Limiting:** Protect backend services from abuse by throttling excessive requests.\n\n4. **Enable Resilience:** Use circuit breakers and fallback mechanisms to handle downstream service failures gracefully.\n\n5. **Monitor and Log:** Integrate centralized logging and monitoring to track API usage and performance.\n\n6. **Support CORS:** Configure Cross-Origin Resource Sharing to allow secure client access across domains.\n\n## Conclusion\n\nAn API Gateway is essential in managing the complexity of distributed Spring Boot microservices. Leveraging frameworks like Spring Cloud Gateway and adhering to best practices ensures scalable, secure, and maintainable API management. This foundation enables development teams to focus on delivering business value while maintaining system robustness and responsiveness.",
    "image": "/blogs/api-gateway-in-spring-boot-microservices.svg?height=300&width=500",
    "author": "Nayeem Khan",
    "publishDate": "2024-05-15",
    "readTime": "9 min read",
    "category": "Backend",
    "tags": ["Spring Boot", "Microservices", "API Gateway", "Spring Cloud Gateway", "Architecture"]
  }
  ,
  {
    id: 2,
    title:
      "Designing Modern Backend Systems with Spring Boot Microservices: A Practical Guide",
    excerpt:
      "A complete guide to building scalable, maintainable, and production-ready microservices with Spring Boot and Spring Cloud. Includes real-world patterns, best practices, and working code examples.",
    content:
      "In today’s software architecture landscape, organizations are increasingly adopting microservices to replace the limitations of monolithic applications. Microservices architecture is a method of developing software systems as a suite of small, independently deployable, loosely coupled services organized around business capabilities.\n\n## Why Microservices?\n\nMicroservices offer significant advantages over traditional monolithic systems. By decomposing applications into multiple services, each focused on a specific feature or functionality, teams can develop, deploy, and scale different parts of an application independently. This leads to greater agility, improved fault tolerance, and better alignment with modern DevOps practices.\n\n## Key Characteristics of Microservices Architecture\n\n- **Decentralized Data Management**: Each service typically manages its own database to prevent tight coupling.\n- **Independent Deployability**: Teams can deploy updates to one service without affecting the entire system.\n- **Resilience and Fault Isolation**: Failures in one service should not cascade throughout the system.\n- **Technology Diversity**: Services can be built with different programming languages and frameworks suited to their requirements.\n\n## Role of Spring Boot in Microservices\n\nSpring Boot is widely popular for building microservices due to its minimal configuration, production-ready features, and seamless integration with Spring Cloud tools. It simplifies application bootstrapping and enables developers to quickly set up services with embedded servers and essential dependencies.\n\n## Key Components in a Spring Boot Microservices System\n\n1. **Service Discovery**: Automatically registers services and helps other services locate them without hardcoding network locations.\n2. **API Gateway**: Acts as a single entry point for client requests, handling routing, load balancing, and security.\n3. **Centralized Configuration**: Externalizes service configuration so changes can be made without rebuilding applications.\n4. **Resilience Patterns**: Implements circuit breakers, retries, and fallbacks to improve system robustness.\n5. **Distributed Tracing**: Tracks requests across multiple services to monitor performance and identify issues.\n\n## Microservices Deployment Considerations\n\nTo operate microservices effectively in production, it’s essential to implement:\n\n- **Containerization**: Package services in lightweight, isolated containers for consistent deployment across environments.\n- **Orchestration**: Use tools like Kubernetes to manage containerized applications and handle scaling, failover, and updates.\n- **Centralized Logging and Monitoring**: Aggregate logs and metrics to monitor system health and performance.\n- **Security Management**: Secure service communication using OAuth2, JWT tokens, or mutual TLS.\n\n## Best Practices for Designing Microservices\n\n- Keep services small, focusing on a single business capability.\n- Define clear API contracts for inter-service communication.\n- Avoid shared databases to maintain service autonomy.\n- Ensure services are stateless for better scalability.\n- Use asynchronous messaging where appropriate to decouple services.\n\n## Conclusion\n\nBuilding scalable microservices with Spring Boot offers organizations a flexible, resilient, and future-ready approach to software development. By leveraging Spring Boot’s ease of use and Spring Cloud’s powerful distributed system tools, teams can confidently architect systems that align with modern operational models, support continuous delivery, and scale effortlessly with business growth.",
    image: "/blogs/designing-modern-backend-systems-with-spring-boot-microservices.png",
    author: "Nayeem Khan",
    publishDate: "2024-03-20",
    readTime: "12 min read",
    category: "Backend",
    tags: [
      "Spring Boot",
      "Microservices",
      "Java",
      "Spring Cloud",
      "Eureka",
      "API Gateway",
      "Resilience4j",
    ],
  },
  {
    id: 3,
    title: "Mastering Modern Web Development with Next.js",
    excerpt:
      "Explore how Next.js is transforming frontend development with server-side rendering, API routes, static site generation, and seamless developer experience.",
    content:
      "In the ever-evolving world of frontend development, developers continuously seek frameworks that offer speed, flexibility, and powerful capabilities without compromising on performance or maintainability. Next.js has emerged as one of the most compelling solutions in this space, offering a robust React-based framework for building modern web applications.\n\n## What is Next.js?\n\nNext.js is an open-source React framework that enables developers to build fast, user-friendly web applications with minimal configuration. Developed and maintained by Vercel, Next.js extends the core React library with powerful features like server-side rendering (SSR), static site generation (SSG), incremental static regeneration (ISR), and integrated API routes.\n\n## Key Advantages of Next.js\n\n- **Zero Configuration**: Next.js provides a highly opinionated setup out of the box, allowing developers to focus on building features rather than configuring complex tools.\n- **Hybrid Rendering**: Applications can choose between server-side rendering, static generation, and client-side rendering on a per-page basis.\n- **Automatic Routing**: Pages are created based on the file system structure, removing the need for explicit route definitions.\n- **Built-in API Routes**: Next.js allows you to create backend API endpoints within the same project without setting up a separate backend service.\n- **Optimized Performance**: Automatic code splitting, image optimization, and prefetching make Next.js applications exceptionally fast.\n\n## Core Concepts of Next.js\n\n1. **Pages and Routing**: Each React component in the `pages/` directory corresponds to a route. Dynamic routes can be created using bracket syntax.\n\n2. **Data Fetching Methods**:\n   - `getStaticProps` for static generation at build time.\n   - `getServerSideProps` for server-side rendering on each request.\n   - `getStaticPaths` for generating dynamic routes at build time.\n\n3. **API Routes**: Functions placed under the `pages/api/` directory act as serverless backend functions, allowing developers to handle form submissions, database queries, or third-party API calls.\n\n4. **Static Site Generation (SSG)**: Generates HTML at build time, offering excellent performance and SEO benefits.\n\n5. **Server-Side Rendering (SSR)**: Renders pages on each request, making it ideal for dynamic, personalized content.\n\n6. **Incremental Static Regeneration (ISR)**: Updates static pages in the background while serving the existing version, enabling near real-time content updates without rebuilding the entire site.\n\n## When to Use Next.js\n\nNext.js is perfect for:\n\n- **Content-driven websites** such as blogs, news portals, and marketing pages.\n- **E-commerce platforms** requiring dynamic and personalized content with SEO optimization.\n- **Dashboards and admin panels** combining both server and client-side rendering.\n- **Single Page Applications (SPAs)** needing improved performance, SEO, and backend APIs in one unified project.\n\n## Best Practices for Next.js Development\n\n- **Leverage hybrid rendering** by choosing the appropriate data fetching strategy for each page.\n- **Organize project structure** by separating UI components, hooks, services, and API routes.\n- **Optimize images and assets** using the Next.js `Image` component and built-in optimization tools.\n- **Implement global error handling** for API routes and dynamic rendering issues.\n- **Use environment variables securely** through Next.js' built-in configuration support.\n\n## Conclusion\n\nNext.js is redefining how modern web applications are built by offering a versatile, performance-oriented framework that blends the best of server-side and client-side rendering. Its developer-friendly features, scalability, and integrated backend capabilities make it a top choice for businesses and developers aiming to deliver seamless, high-performance web experiences.\n\nAs frontend demands continue to evolve, mastering Next.js equips developers with the tools to build future-ready applications with minimal effort and maximum efficiency.",
    image: "/blogs/mastering-modern-web-development-with-next.png",
    author: "Nayeem Khan",
    publishDate: "2024-02-05",
    readTime: "9 min read",
    category: "Frontend",
    tags: ["Next.js", "React", "Web Development", "Frontend Frameworks"],
  },
  {
    id: 4,
    title: "Choosing Between MySQL and PostgreSQL for Modern Applications",
    excerpt:
      "Understand the core differences, strengths, and ideal use cases of MySQL and PostgreSQL to make informed decisions for your application architecture.",
    content:
      "In the rapidly growing ecosystem of modern application development, selecting the right database plays a pivotal role in the performance, scalability, and long-term maintainability of software systems. MySQL and PostgreSQL have consistently remained two of the most trusted and widely used relational database management systems (RDBMS) in the world. Each brings distinct strengths to the table, making them suitable for different types of applications and business needs.\n\n## Introduction to MySQL and PostgreSQL\n\n**MySQL** is an open-source relational database management system developed by Oracle, known for its simplicity, reliability, and speed. It has long been the default choice for web applications, particularly those built using PHP-based stacks like LAMP.\n\n**PostgreSQL**, on the other hand, is an advanced, enterprise-class open-source RDBMS known for its robustness, extensibility, and standards compliance. Often considered a more feature-rich alternative, PostgreSQL offers capabilities such as advanced data types, full-text search, and sophisticated concurrency controls.\n\n## Key Differences and Strengths\n\n### 1. **Data Integrity and Compliance**\nPostgreSQL is highly regarded for its strict adherence to ACID (Atomicity, Consistency, Isolation, Durability) principles, making it ideal for applications requiring complex transactions, financial systems, or data warehousing. MySQL provides ACID compliance when using certain storage engines like InnoDB but is traditionally optimized for speed over strict compliance.\n\n### 2. **Performance and Speed**\nMySQL typically delivers faster performance in read-heavy workloads and simple query operations. It shines in high-traffic web applications, where straightforward data structures and optimized indexes are sufficient.\n\nPostgreSQL, while slightly slower in lightweight operations, excels in handling complex queries, large datasets, and write-heavy applications due to its superior optimization features and indexing strategies.\n\n### 3. **Extensibility and Features**\nPostgreSQL supports advanced features such as:\n\n- Custom data types\n- JSONB for efficient JSON storage and indexing\n- Full-text search capabilities\n- Materialized views\n- Window functions\n- Table inheritance\n\nMySQL offers essential database functionalities but lacks some of the advanced features available in PostgreSQL. However, its simplicity makes it easier to configure, deploy, and maintain for typical CRUD-based applications.\n\n### 4. **Community and Ecosystem Support**\nBoth databases enjoy active, global communities contributing to continuous improvements, documentation, and third-party tools. PostgreSQL is often favored by the open-source and academic communities, while MySQL boasts strong enterprise support due to Oracle's backing.\n\n## Ideal Use Cases\n\n**When to Choose MySQL:**\n\n- Lightweight web applications and blogs\n- E-commerce platforms with moderate complexity\n- Applications with simple relational data models\n- Rapid prototyping and MVP projects\n\n**When to Choose PostgreSQL:**\n\n- Data analytics platforms\n- Financial applications and systems requiring high data integrity\n- Applications with complex relational data and custom business rules\n- Projects needing advanced SQL features or JSON document storage\n\n## Conclusion\n\nThe decision between MySQL and PostgreSQL should be driven by your application’s specific requirements, expected workload patterns, and long-term scalability considerations. MySQL remains a top choice for applications demanding speed and simplicity, while PostgreSQL’s advanced feature set makes it an excellent candidate for data-intensive, transaction-heavy, and enterprise-grade systems.\n\nUnderstanding these strengths empowers development teams to architect resilient, high-performance backend systems tailored to their product’s unique needs.",
    image: "/blogs/choosing-between-mysql-and-postgresql-for-modern-applications.png",
    author: "Nayeem Khan",
    publishDate: "2024-03-10",
    readTime: "10 min read",
    category: "Database",
    tags: ["MySQL", "PostgreSQL", "Database Design", "Data Management"],
  },
  {
    id: 5,
    title:
      "Containerization and Orchestration: Harnessing Docker and Kubernetes for Scalable DevOps",
    excerpt:
      "Discover how Docker and Kubernetes revolutionize application deployment, enabling scalable, resilient, and efficient DevOps workflows.",
    content:
      'In modern software development, delivering applications rapidly and reliably across diverse environments is paramount. Containerization and orchestration technologies, led by Docker and Kubernetes, have transformed DevOps practices, providing a foundation for scalable, portable, and automated deployments.\n\n## The Rise of Containerization with Docker\n\nDocker introduced a paradigm shift by enabling developers to package applications along with their dependencies into lightweight, portable containers. Unlike traditional virtual machines, containers share the host operating system kernel, resulting in faster startup times, reduced resource consumption, and consistency across development, testing, and production environments.\n\nDocker’s simple image-building process and vast ecosystem have made it the standard for container technology. By encapsulating an application’s runtime environment, Docker eliminates the "it works on my machine" problem, facilitating seamless collaboration between development and operations teams.\n\n## Kubernetes: Orchestrating Containers at Scale\n\nWhile Docker handles individual containers efficiently, managing hundreds or thousands of containers across multiple hosts requires orchestration. Kubernetes, originally developed by Google and now a CNCF project, provides powerful mechanisms for automating deployment, scaling, and operations of containerized applications.\n\nKey Kubernetes features include:\n\n- **Automated Rollouts and Rollbacks:** Ensuring smooth application updates without downtime.\n- **Self-Healing:** Automatically restarting failed containers, replacing them, or rescheduling on healthy nodes.\n- **Horizontal Scaling:** Dynamically adjusting the number of container instances based on demand.\n- **Service Discovery and Load Balancing:** Efficiently routing traffic between containers.\n- **Secret and Configuration Management:** Securely handling sensitive information.\n\n## How Docker and Kubernetes Complement Each Other\n\nDocker provides the foundation by creating and running containers, while Kubernetes manages clusters of these containers, orchestrating their lifecycle and interactions. Together, they enable:\n\n- **Consistent Environments:** Developers build containers once, deploy anywhere.\n- **Improved Resource Utilization:** Kubernetes schedules containers to optimize infrastructure use.\n- **Increased Agility:** Rapid scaling and continuous deployment pipelines become achievable.\n- **Resilience:** Applications remain available despite failures.\n\n## Best Practices for Using Docker and Kubernetes\n\n- **Design Microservices with Containers in Mind:** Build loosely coupled services to maximize the benefits of container orchestration.\n- **Use Declarative Configuration:** Define infrastructure as code using Kubernetes manifests for reproducible deployments.\n- **Implement Monitoring and Logging:** Integrate tools like Prometheus and ELK stack for observability.\n- **Secure the Container Environment:** Apply best security practices such as least privilege, image scanning, and secrets management.\n- **Automate CI/CD Pipelines:** Use tools like Jenkins, GitLab CI, or GitHub Actions for seamless application delivery.\n\n## Conclusion\n\nMastering Docker and Kubernetes is essential for modern DevOps teams aiming to deliver scalable, resilient, and efficient applications. These technologies not only streamline deployment processes but also empower teams to innovate rapidly while maintaining stability and performance in production environments.\n\nAs cloud-native architectures become the norm, leveraging containerization and orchestration unlocks new possibilities for agility, scalability, and operational excellence in software delivery.',
    image: "/blogs/harnessing-docker-and-kubernetes-for-scalable-devops.jpg",
    author: "Nayeem Khan",
    publishDate: "2024-04-15",
    readTime: "9 min read",
    category: "DevOps",
    tags: [
      "Docker",
      "Kubernetes",
      "Containerization",
      "DevOps",
      "Orchestration",
    ],
  },
  {
    id: 6,
    title: "Mastering Next.js: Building High-Performance React Applications",
    excerpt:
      "Explore how Next.js enhances React development with server-side rendering, static generation, and optimized performance for modern web apps.",
    content:
      "Next.js has rapidly become one of the most popular React frameworks for building production-grade web applications. By combining the power of React with features like server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR), Next.js addresses many challenges faced by developers striving to create fast, SEO-friendly, and scalable web experiences.\n\n## Why Next.js?\n\nWhile React excels at building dynamic user interfaces, traditional client-side rendering can sometimes hinder performance and SEO, especially for content-heavy sites. Next.js bridges this gap by offering:\n\n- **Server-Side Rendering (SSR):** Pages are rendered on the server at request time, improving load times and SEO.\n- **Static Site Generation (SSG):** Pages are pre-rendered at build time, delivering lightning-fast performance.\n- **Incremental Static Regeneration (ISR):** Allows selective regeneration of static pages, blending static and dynamic content.\n\n## Performance Optimization Techniques\n\nNext.js empowers developers with built-in optimizations out of the box, but understanding and leveraging these can elevate your app’s performance:\n\n- **Image Optimization:** The `next/image` component automatically optimizes images with lazy loading and resizing.\n- **Code Splitting:** Automatic splitting of JavaScript bundles reduces initial load size.\n- **API Routes:** Serverless functions enable backend logic without separate infrastructure.\n- **Prefetching:** Next.js prefetches linked pages in the background to accelerate navigation.\n\n## Best Practices for Scalable Next.js Apps\n\n- **Use Static Generation Where Possible:** Prefer SSG for content that doesn’t change frequently to maximize speed.\n- **Optimize Data Fetching:** Leverage `getStaticProps` and `getServerSideProps` appropriately to balance performance and freshness.\n- **Implement Incremental Static Regeneration:** Keep content up-to-date without full rebuilds.\n- **Leverage Environment Variables:** Securely manage secrets and environment-specific settings.\n- **Integrate Analytics and Monitoring:** Track real-user metrics to identify bottlenecks.\n\n## Conclusion\n\nNext.js empowers developers to build performant, SEO-friendly React applications by seamlessly integrating server-side capabilities and static generation. Mastering its features and best practices is crucial for delivering exceptional user experiences and scalable web solutions in today’s competitive digital landscape.",
    image: "/blogs/mastering-nextjs.png",
    author: "Nayeem Khan",
    publishDate: "2024-05-01",
    readTime: "8 min read",
    category: "Frontend",
    tags: ["Next.js", "React", "SSR", "SSG", "Performance Optimization"],
  },
  {
    "id": 7,
    "title": "Unlocking PostgreSQL Performance: Advanced Indexing and Query Optimization Techniques",
    "excerpt": "Dive deep into PostgreSQL’s advanced indexing options and performance tuning strategies to build efficient and scalable databases.",
    "content": "PostgreSQL is renowned for its robustness, extensibility, and advanced feature set, making it a preferred choice for many enterprise applications. However, to harness its full potential, developers and DBAs must understand how to leverage advanced indexing techniques and optimize queries effectively.\n\n## Understanding PostgreSQL Index Types\n\nPostgreSQL supports a variety of index types, each tailored to different use cases:\n\n- **B-tree Indexes:** The default index type suitable for equality and range queries.\n- **Hash Indexes:** Optimized for equality comparisons but less commonly used.\n- **GIN (Generalized Inverted Index):** Ideal for indexing composite types like JSONB and full-text search.\n- **GiST (Generalized Search Tree):** Supports complex data types such as geometric data.\n- **BRIN (Block Range Index):** Efficient for very large tables where data is naturally ordered.\n\nChoosing the right index type is critical to improving query performance without incurring excessive storage or maintenance overhead.\n\n## Best Practices for Indexing\n\n- **Analyze Query Patterns:** Focus on indexing columns frequently used in WHERE clauses, JOINs, and ORDER BY statements.\n- **Avoid Over-Indexing:** Excessive indexes slow down write operations and increase storage requirements.\n- **Use Partial Indexes:** Index subsets of data when queries filter on specific conditions.\n- **Leverage Expression Indexes:** Index the result of expressions or functions used in queries.\n\n## Query Optimization Strategies\n\n- **Use EXPLAIN and EXPLAIN ANALYZE:** Understand query plans and identify bottlenecks.\n- **Vacuum and Analyze:** Regularly maintain statistics for the query planner.\n- **Optimize Joins:** Prefer smaller datasets first and ensure indexes support join conditions.\n- **Limit Data Retrieval:** Select only necessary columns and use LIMIT for pagination.\n\n## Monitoring and Performance Tuning\n\n- **Track Slow Queries:** Use the `pg_stat_statements` extension.\n- **Adjust Configuration Parameters:** Tune work_mem, shared_buffers, and effective_cache_size based on workload.\n- **Connection Pooling:** Implement tools like PgBouncer to manage database connections efficiently.\n\n## Conclusion\n\nMastering PostgreSQL’s indexing and optimization techniques enables you to build scalable and performant applications. Understanding the nuances of different index types, analyzing query behavior, and tuning your database configuration are essential steps toward achieving robust data management and lightning-fast query responses in production environments.",
    "image": "/placeholder.svg?height=300&width=500",
    "author": "Nayeem Khan",
    "publishDate": "2024-05-28",
    "readTime": "10 min read",
    "category": "Database",
    "tags": ["PostgreSQL", "Indexing", "Query Optimization", "Performance Tuning", "Database"]
  },
];

export default function BlogsPage() {
  const containerRef = useRef(null);

  // Navigation bar at the top
  const navBar = (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 dark:bg-black/90 bg-white/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ x: -3 }}>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-300 dark:text-gray-300 text-gray-700 hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </Link>
          </motion.div>
          <div className="flex items-center gap-2 text-purple-400">
            <BookOpen size={20} />
            <span className="font-semibold">Blog</span>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {navBar}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-white text-gray-900 mb-6">
              All Blog Posts
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse all articles and tutorials.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
