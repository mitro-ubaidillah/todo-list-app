This repository presents a Next.js 14+ App Router project engineered for high performance and optimal user experience. It serves as an example of a Todo List application and leverages Redux Toolkit Query (RTKQ) as its primary data fetching and caching solution.

Key Features:

Next.js 14+ App Router: Modern routing and rendering architecture for React applications.

Redux Toolkit Query (RTKQ): Streamlined data fetching, caching, and state management.

Server-Side Rendering (SSR): Initial page loads are rendered on the server for improved performance and SEO.

Incremental Static Regeneration (ISR): Data is pre-rendered at build time and periodically revalidated on the server, balancing performance with content freshness.

Client-Side Revalidation: RTKQ automatically revalidates and refreshes data on the client when data becomes stale or mutations invalidate cached data (e.g., after adding a new todo).

Dynamic Pagination: Efficiently fetches and displays data in chunks, with seamless navigation between pages.

SEO Best Practices:

Dynamic robots.txt: Configured to dynamically generate based on environment variables (localhost vs. production).

Dynamic sitemap.xml: Automatically generated to help search engines discover and index pages.

Pre-rendered content for better search engine visibility.

Modular Code Structure: Organized into clear directories for components, interfaces, lib utilities, and services, promoting maintainability.

TypeScript: Full type-safety across the application.