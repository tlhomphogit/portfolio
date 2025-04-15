const projects = [

  {
    title: "Portfilio Website",
    description:
      "A responsive personal portfolio built using, React, TypeScript, Tailwind CSS and Vite. Showcases my skills and projects.",
    technologies: "React · TypeScript · Tailwind CSS",
    status: "Live",
    github: "https://github.com/your-username/college-management",
    isFrontend: true,
  },
  {
    title: "User Management API",
    description:
      "A RESTful API built with Node.js, Express, and MongoDB. Includes user authentication, role-based access, and session handling.",
    technologies: "Node.js · Express · MongoDB",
    status: "In Progress", // You can set this to "Live" too
    github: "https://github.com/your-username/user-management-api",
    isFrontend: false, // Can be used for placeholder logic
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-20 px-4 justify-center text-center">
      <h2 className="text-2xl font-bold mb-10 border-b border-r rounded-md px-2 py-2">
        Projects
      </h2>

      {/* Container for project cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 p-4 rounded-xl shadow-md max-w-sm w-full"
          >
            {/* === Top Image or Placeholder === */}
            <div className="relative">
              {project.isFrontend ? (
                <img
                  src="/project1.webp" // Replace with real preview image path
                  alt={project.title}
                  className="rounded-lg object-cover w-full h-50"
                />
              ) : (
                <img
                  src="/project2.webp" // Replace with real preview image path
                  alt={project.title}
                  className="rounded-lg object-cover w-full h-50"
                />
              )}

              {/* === Status Badge === */}
              <span
                className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full ${
                  project.status === "Live"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 text-black"
                }`}
              >
              {project.status}
              </span>
            </div>

            {/* === Title === */}
            <h3 className="text-lg font-semibold text-neutral-200 mt-4">
              {project.title}
            </h3>

            {/* === Description === */}
            <p className="text-neutral-400 text-sm mt-1">
              {project.description}
            </p>

            {/* === Footer with tech stack and GitHub link === */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-neutral-400">
                {project.technologies}
              </span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;