export interface Project {
  slug: string;  //easy identifier for each project, better for scalability
  name: string;
  subtitle: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  lessons: string;
  image: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    slug: "task-manager",
    name: "Task Manager",
    subtitle: "Full-stack productivity application",
    description:
      "A web application for organizing tasks, tracking progress, and visualizing task statuses.",
    problem:
      "Managing tasks without a central overview makes it difficult to monitor progress and identify unfinished work.",
    features: [
      "Create and manage tasks",
      "Search and filter tasks",
      "View task status summaries",
      "Visualize progress using charts",
    ],
    technologies: ["React", "FastAPI", "SQLModel", "PostgreSQL"],
    lessons:
      "I gained experience connecting a React frontend to a REST API, working with databases, and presenting task statistics visually.",
    image: "/images/task-manager.png",
    screenshots: [
     "/images/task-manager-tasks.png",
     "/images/task-manager.png",
    ],
  },
  {
    slug: "cafeteria-management-system",
    name: "Cafeteria Management System",
    subtitle: "Desktop food ordering application",
    description:
      "A JavaFX application supporting customer food ordering and manager inventory operations.",
    problem:
      "Manual cafeteria ordering can make it harder to track orders and maintain an organized menu.",
    features: [
      "Customer registration and login",
      "Menu browsing and cart management",
      "Order history and receipts",
      "Manager inventory controls",
    ],
    technologies: ["Java", "JavaFX", "Scene Builder"],
    lessons:
      "I learned how to organize a desktop application around separate user roles and graphical interfaces.",
    image: "/images/cafeteria-management-system.png",
    screenshots: [
     "/images/cafeteria-dashboard.png",
     "/images/cafeteria-login.png",
     "/images/cafeteria-cart.png",
     "/images/cafeteria-menu.png",
     "/images/cafeteria-manager.png",
    ],
  },
];