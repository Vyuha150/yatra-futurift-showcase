import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminSettings = () => (
  <div className="grid gap-6">
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-medium">Email Notifications</h4>
            <p className="text-sm text-muted-foreground">
              Receive email updates for important events
            </p>
          </div>
          <Button variant="outline">Configure</Button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-medium">Backup Schedule</h4>
            <p className="text-sm text-muted-foreground">
              Automated daily backups at 2:00 AM
            </p>
          </div>
          <Button variant="outline">Modify</Button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-medium">Security Settings</h4>
            <p className="text-sm text-muted-foreground">
              Two-factor authentication and access logs
            </p>
          </div>
          <Button variant="outline">Manage</Button>
        </div>
      </CardContent>
    </Card>
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>User Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium">Admin Users</h4>
              <p className="text-sm text-muted-foreground">
                Manage administrator accounts and permissions
              </p>
            </div>
            <Button variant="outline">View All</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default AdminSettings;
