import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminStats from "@/components/admin/AdminStats";
import AdminProducts from "@/components/admin/AdminProducts";
import AdminProjects from "@/components/admin/AdminProjects";
import AdminCareers from "@/components/admin/AdminCareers";
import AdminAnalytics from "@/components/admin/AdminAnalytics";
import AdminSettings from "@/components/admin/AdminSettings";
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
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [errorProducts, setErrorProducts] = useState("");

  // Fetch products from backend
  useEffect(() => {
    if (activeTab === "products") {
      setLoadingProducts(true);
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      console.log("Fetching products from:", url);
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Fetched products:", data);
          setProducts(Array.isArray(data) ? data : []);
          setErrorProducts("");
        })
        .catch((err) => {
          console.error("Product fetch error:", err);
          setErrorProducts(`Failed to fetch products: ${err.message}`);
        })
        .finally(() => setLoadingProducts(false));
    }
  }, [activeTab]);

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
            <AdminHeader />
            <AdminStats stats={stats} />
          </motion.div>
        </div>
      </section>

      {/* Admin Tabs */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
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
              <TabsTrigger
                value="analytics"
                className="flex items-center gap-2"
              >
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
              <AdminProducts
                products={products}
                loading={loadingProducts}
                error={errorProducts}
              />
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <AdminProjects
                projects={[
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
                ]}
              />
            </TabsContent>

            {/* Careers Tab */}
            <TabsContent value="careers" className="space-y-6">
              <AdminCareers
                jobs={[
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
                ]}
              />
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-8">
              <AdminAnalytics salesData={salesData} trafficData={trafficData} />
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Page Views", value: "245K", change: "+18%" },
                  { title: "Unique Visitors", value: "42K", change: "+12%" },
                  { title: "Conversion Rate", value: "3.2%", change: "+8%" },
                ].map((metric, index) => (
                  <Card key={index} className="bg-card/50 border-border">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-2">
                        {metric.title}
                      </h3>
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
              <AdminSettings />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
};

export default AdminDashboard;
