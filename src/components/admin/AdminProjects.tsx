import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Building2, MapPin } from "lucide-react";

type Project = {
  name: string;
  location: string;
  type: string;
  status: string;
  elevators: number;
};

const AdminProjects = ({ projects }: { projects: Project[] }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Trusted Projects Management</h2>
      <Button className="btn-primary flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Add Project
      </Button>
    </div>
    <div className="grid gap-4">
      {projects.map((project, index) => (
        <Card key={index} className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-green/20 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-neon-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <p className="text-sm text-neon-blue">
                    {project.type} • {project.elevators} units
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    project.status === "Completed"
                      ? "default"
                      : project.status === "In Progress"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {project.status}
                </Badge>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-red-500">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default AdminProjects;
