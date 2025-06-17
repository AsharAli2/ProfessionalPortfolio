import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import CloudinaryImage from "./CloudinaryImage";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

const ProjectsSection = ({ limit: projectLimit }: { limit?: number }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      let projectsQuery = query(
        collection(db, "projects"),
        orderBy("createdAt", "desc")
      );

      if (projectLimit) {
        projectsQuery = query(projectsQuery, limit(projectLimit));
      }

      const querySnapshot = await getDocs(projectsQuery);
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];

      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [projectLimit]);

  if (loading) {
    return (
      <section className="py-20" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gold-text-gradient">Featured Projects</span>
          </h2>
          <div className="text-center text-gold-400">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gold-text-gradient">Featured Projects</span>
        </h2>

        {projects.length === 0 ? (
          <div className="text-center text-gray-400">
            No projects available yet.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="gold-card overflow-hidden group transition-all duration-300 hover:-translate-y-2 h-[500px] flex flex-col"
                >
                  <div className="h-48 w-full bg-gradient-to-br from-gold-900 to-black flex items-center justify-center overflow-hidden relative">
                    {project.imageUrl ? (
                      <div className="w-full h-full relative">
                        <CloudinaryImage
                          imagePath={project.imageUrl}
                          alt={project.title}
                          width={400}
                          height={192}
                          className="w-full h-full object-fill"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                    ) : (
                      <div className="text-gold-500/30 text-6xl font-bold">
                        {project.title.substring(0, 2)}
                      </div>
                    )}
                  </div>

                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-gold-400 text-lg line-clamp-1">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-gold-500/30 text-gold-400 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-gold-500/30 text-gold-400 text-xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-400 text-sm ">
                      {project.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="flex gap-4 flex-shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-500 hover:text-gold-300 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-500 hover:text-gold-300 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>

            {projectLimit && (
              <div className="text-center">
                <Link to="/projects" className="gold-button inline-block">
                  View All Projects
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
