import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, ExternalLink, Github } from "lucide-react";
import { toast } from "sonner";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const cld = new Cloudinary({ cloud: { cloudName: "dcyehziuo" } });

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectsData);
    } catch (error) {
      toast.error("Error fetching projects");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await deleteDoc(doc(db, "projects", id));
      setProjects(projects.filter((project) => project.id !== id));
      toast.success("Project deleted successfully");
    } catch (error) {
      toast.error("Error deleting project");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-gold-400">Loading projects...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold gold-text-gradient">Manage Projects</h2>

      {projects.length === 0 ? (
        <Card className="gold-card">
          <CardContent className="pt-6">
            <p className="text-center text-gray-400">
              No projects found. Add your first project!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="gold-card">
              {project.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <AdvancedImage
                    cldImg={cld
                      .image(project.imageUrl)
                      .format("auto")
                      .quality("auto")
                      .resize(
                        auto().gravity(autoGravity()).width(400).height(200)
                      )}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-gold-400">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-gold-500/30 text-gold-400 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteProject(project.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
