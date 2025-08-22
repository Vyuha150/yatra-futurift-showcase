import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { PageLoadWrapper } from "@/components/AnimatedComponents";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  Users,
  Package,
  TrendingUp,
  Activity,
  Eye,
  Plus,
  Edit,
  Trash2,
  Building2,
  Briefcase,
  BarChart3,
  Settings,
  Target,
  ShoppingBag,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for analytics
  const salesData = [
    { name: "Jan", value: 4000, users: 2400 },
    { name: "Feb", value: 3000, users: 1398 },
    { name: "Mar", value: 2000, users: 9800 },
    { name: "Apr", value: 2780, users: 3908 },
    { name: "May", value: 1890, users: 4800 },
    { name: "Jun", value: 2390, users: 3800 },
  ];

  const projectsData = [
    { name: "Completed", value: 400, color: "#10b981" },
    { name: "In Progress", value: 300, color: "#f59e0b" },
    { name: "Planned", value: 200, color: "#3b82f6" },
    { name: "On Hold", value: 100, color: "#ef4444" },
  ];

  const trafficData = [
    { name: "Mon", visitors: 2400, pageViews: 4000 },
    { name: "Tue", visitors: 1398, pageViews: 3000 },
    { name: "Wed", visitors: 9800, pageViews: 2000 },
    { name: "Thu", visitors: 3908, pageViews: 2780 },
    { name: "Fri", visitors: 4800, pageViews: 1890 },
    { name: "Sat", visitors: 3800, pageViews: 2390 },
    { name: "Sun", visitors: 4300, pageViews: 3490 },
  ];

  const stats = [
    {
      title: "Total Products",
      value: "127",
      change: "+12%",
      icon: Package,
      color: "text-blue-500",
    },
    {
      title: "Active Projects",
      value: "45",
      change: "+8%",
      icon: Building2,
      color: "text-green-500",
    },
    {
      title: "Job Applications",
      value: "284",
      change: "+24%",
      icon: Users,
      color: "text-purple-500",
    },
    {
      title: "Monthly Revenue",
      value: "₹12.4L",
      change: "+15%",
      icon: TrendingUp,
      color: "text-orange-500",
    },
  ];

  return (
    <PageLoadWrapper>
      <CustomCursor />
      <Navigation />

      {/* Admin Header */}
      <section className="pt-24 pb-8 px-6 bg-gradient-to-br from-background via-surface to-surface-elevated">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 border-border hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {stat.title}
                          </p>
                          <p className="text-2xl font-bold text-foreground">
                            {stat.value}
                          </p>
                          <p className="text-sm text-green-500">{stat.change}</p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admin Tabs */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="products" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Products
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="careers" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Careers
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Sales Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#06b6d4"
                          fill="#06b6d4"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Projects Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={projectsData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                        >
                          {projectsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Website Traffic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="#06b6d4"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="pageViews"
                        stroke="#10b981"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Products Tab */}
            <TabsContent value="products" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Product Management</h2>
                <Button className="btn-primary flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Product
                </Button>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    name: "Passenger Elevators",
                    category: "Elevators",
                    price: "₹8,50,000",
                    status: "Active",
                    orders: 45,
                  },
                  {
                    name: "Freight Elevators",
                    category: "Elevators",
                    price: "₹12,50,000",
                    status: "Active",
                    orders: 28,
                  },
                  {
                    name: "Hospital Elevators",
                    category: "Elevators",
                    price: "₹15,75,000",
                    status: "Active",
                    orders: 33,
                  },
                  {
                    name: "Commercial Escalators",
                    category: "Escalators",
                    price: "₹25,00,000",
                    status: "Draft",
                    orders: 12,
                  },
                ].map((product, index) => (
                  <Card key={index} className="bg-card/50 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-lg flex items-center justify-center">
                            <Package className="w-8 h-8 text-neon-cyan" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {product.category} • {product.orders} orders
                            </p>
                            <p className="text-lg font-bold text-neon-cyan">
                              {product.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              product.status === "Active" ? "default" : "secondary"
                            }
                          >
                            {product.status}
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
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Trusted Projects Management</h2>
                <Button className="btn-primary flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Project
                </Button>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    name: "Mumbai Metro Rail Corporation",
                    location: "Mumbai, Maharashtra",
                    type: "Public Transport",
                    status: "Completed",
                    elevators: 120,
                  },
                  {
                    name: "Prestige Tech Park",
                    location: "Bangalore, Karnataka",
                    type: "Commercial",
                    status: "In Progress",
                    elevators: 45,
                  },
                  {
                    name: "AIIMS Medical Complex",
                    location: "New Delhi",
                    type: "Healthcare",
                    status: "Completed",
                    elevators: 80,
                  },
                  {
                    name: "Phoenix Mall",
                    location: "Chennai, Tamil Nadu",
                    type: "Retail",
                    status: "Planning",
                    elevators: 35,
                  },
                ].map((project, index) => (
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
            </TabsContent>

            {/* Careers Tab */}
            <TabsContent value="careers" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Job Postings Management</h2>
                <Button className="btn-primary flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Post New Job
                </Button>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title: "Service Engineer",
                    department: "Technical",
                    type: "Full-time",
                    location: "Mumbai",
                    applications: 45,
                    status: "Active",
                    posted: "2 days ago",
                  },
                  {
                    title: "Marketing Executive",
                    department: "Marketing",
                    type: "Full-time",
                    location: "Bangalore",
                    applications: 67,
                    status: "Active",
                    posted: "1 week ago",
                  },
                  {
                    title: "Service Executive",
                    department: "Operations",
                    type: "Full-time",
                    location: "Delhi",
                    applications: 32,
                    status: "Draft",
                    posted: "3 days ago",
                  },
                  {
                    title: "Installation Technician",
                    department: "Technical",
                    type: "Contract",
                    location: "Chennai",
                    applications: 28,
                    status: "Closed",
                    posted: "2 weeks ago",
                  },
                ].map((job, index) => (
                  <Card key={index} className="bg-card/50 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-8 h-8 text-neon-green" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {job.title}
                            </h3>
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
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle>Product Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#06b6d4" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle>User Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={trafficData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="visitors"
                          stroke="#10b981"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Page Views", value: "245K", change: "+18%" },
                  { title: "Unique Visitors", value: "42K", change: "+12%" },
                  { title: "Conversion Rate", value: "3.2%", change: "+8%" },
                ].map((metric, index) => (
                  <Card key={index} className="bg-card/50 border-border">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                      <p className="text-3xl font-bold text-neon-cyan mb-1">
                        {metric.value}
                      </p>
                      <p className="text-sm text-green-500">{metric.change}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <h2 className="text-2xl font-bold">System Settings</h2>
              
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
};

export default AdminDashboard;