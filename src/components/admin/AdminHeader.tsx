import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

const AdminHeader = () => (
  <div className="flex items-center justify-between mb-8">
    <div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-green bg-clip-text text-transparent mb-2">
        Admin Dashboard
      </h1>
      <p className="text-muted-foreground">
        Manage your business operations and analytics
      </p>
    </div>
    <Badge variant="outline" className="px-4 py-2">
      <Activity className="w-4 h-4 mr-2" />
      Live
    </Badge>
  </div>
);

export default AdminHeader;
