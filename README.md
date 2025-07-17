# My Next.js RTK Query Todo App

This repository presents a **Next.js 14+ App Router** project engineered for high performance and optimal user experience. **It serves as an example of a Todo List application** and leverages **Redux Toolkit Query (RTKQ)** as its primary data fetching and caching solution.

## Key Features:

* **Next.js 14+ App Router:** Modern routing and rendering architecture for React applications.
* **Redux Toolkit Query (RTKQ):** Streamlined data fetching, caching, and state management.
* **Server-Side Rendering (SSR):** Initial page loads are rendered on the server for improved performance and SEO.
* **Incremental Static Regeneration (ISR):** Data is pre-rendered at build time and periodically revalidated on the server, balancing performance with content freshness.
* **Client-Side Revalidation:** RTKQ automatically revalidates and refreshes data on the client when data becomes stale or mutations invalidate cached data (e.g., after adding a new todo).
* **Dynamic Pagination:** Efficiently fetches and displays data in chunks, with seamless navigation between pages.
* **SEO Best Practices:**
    * **Dynamic `robots.txt`:** Configured to dynamically generate based on environment variables (localhost vs. production).
    * **Dynamic `sitemap.xml`:** Automatically generated to help search engines discover and index pages.
    * Pre-rendered content for better search engine visibility.
* **Modular Code Structure:** Organized into clear directories for components, interfaces, lib utilities, and services, promoting maintainability.
* **TypeScript:** Full type-safety across the application.

---

## Getting Started

Follow these steps to get your development environment set up.

### Prerequisites

Make sure you have Node.js (v18.x or higher recommended) and npm/yarn installed on your machine.

### 1. Clone the Repository

First, clone the repository to your local machine using Git:

```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name # Navigate into your project directory
```

### 2. Install Dependencies

Install the necessary project dependencies using npm or yarn

```bash
npm install
# or
yarn install
```

### 3. Configure Envirotment Variables

Create a `.env.local` file in the root of your project (in the same directory as package.json). This file will hold your local environment variables and is excluded from version control by `.gitignore`.

```bash
touch .env.local
```

Open `.env.local` and add the following content.

```ini,TOML
# .env.local
# Environment variables for local development

# Base URL for the API endpoints
# For JSONPlaceholder, it remains the same for local dev and production.
# If you have a local backend, change this to your local API URL (e.g., http://localhost:8080)
NEXT_PUBLIC_API_BASE_URL=[https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

# Base URL for the site itself. Important for sitemap.xml and robots.txt.
# This will be replaced with your production domain during deployment.
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run The Development Server 

Once the dependencies are installed and environment variables are set, you can start the Next.js development server:

```bash
npm run dev
# or 
yarn dev
```

Open your browser and navigate to `http://localhost:3000`.

You should see the Todo List application running, pre-rendered by Next.js and revalidated by RTK Query on the client.