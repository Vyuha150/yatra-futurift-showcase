import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Briefcase, Clock, MapPin } from "lucide-react";

type Job = {
  title: string;
  department: string;
  type: string;
  location: string;
  applications: number;
  status: string;
  posted: string;
};

const AdminCareers = ({ jobs }: { jobs: Job[] }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Job Postings Management</h2>
      <Button className="btn-primary flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Post New Job
      </Button>
    </div>
    <div className="grid gap-4">
      {jobs.map((job, index) => (
        <Card key={index} className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-neon-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-neon-cyan">
                      {job.applications} applications
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {job.posted}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    job.status === "Active"
                      ? "default"
                      : job.status === "Draft"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {job.status}
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

export default AdminCareers;
