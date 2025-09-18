import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminStats from "@/components/admin/AdminStats";
import AdminPriceQuotations from "@/components/admin/AdminPriceQuotations";
import AdminProducts from "@/components/admin/AdminProducts";
import AdminServiceRequests from "@/components/admin/AdminServiceRequests";
import AdminCustomerFeedback from "@/components/admin/AdminCustomerFeedback";
import AdminPartnerApplications from "@/components/admin/AdminPartnerApplications";
import AdminContactMessages from "@/components/admin/AdminContactMessages";
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
  FileText,
  Package,
  Wrench,
  MessageSquare,
  TrendingUp,
  Activity,
  Eye,
  Plus,
  Edit,
  Trash2,
  UserCheck,
  BarChart3,
  Settings,
  Target,
  ShoppingBag,
  Calendar,
  Clock,
  MapPin,
  Mail,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [quotations, setQuotations] = useState([]);
  const [loadingQuotations, setLoadingQuotations] = useState(false);
  const [errorQuotations, setErrorQuotations] = useState("");

  // Products state
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [errorProducts, setErrorProducts] = useState("");

  // Service Requests state
  const [serviceRequests, setServiceRequests] = useState([]);
  const [loadingServiceRequests, setLoadingServiceRequests] = useState(false);
  const [errorServiceRequests, setErrorServiceRequests] = useState("");

  // Customer Feedback state
  const [customerFeedback, setCustomerFeedback] = useState([]);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState("");

  // Partner Applications state
  const [partnerApplications, setPartnerApplications] = useState([]);
  const [loadingApplications, setLoadingApplications] = useState(false);
  const [errorApplications, setErrorApplications] = useState("");

  // Contact Messages state
  const [contactMessages, setContactMessages] = useState([]);
  const [loadingContactMessages, setLoadingContactMessages] = useState(false);
  const [errorContactMessages, setErrorContactMessages] = useState("");

  // Fetch quotations from backend
  const fetchQuotations = async () => {
    setLoadingQuotations(true);
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/price-quotation`;
      console.log("Fetching quotations from:", url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched quotations:", data);
      setQuotations(Array.isArray(data) ? data : []);
      setErrorQuotations("");
    } catch (err) {
      console.error("Quotations fetch error:", err);
      setErrorQuotations(
        `Failed to fetch quotations: ${(err as Error).message}`
      );
    } finally {
      setLoadingQuotations(false);
    }
  };

  // Fetch products from backend
  const fetchProducts = async () => {
    setLoadingProducts(true);
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      console.log("Fetching products from:", url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched products:", data);
      setProducts(Array.isArray(data) ? data : []);
      setErrorProducts("");
    } catch (err) {
      console.error("Products fetch error:", err);
      setErrorProducts(`Failed to fetch products: ${(err as Error).message}`);
    } finally {
      setLoadingProducts(false);
    }
  };

  // Fetch service requests from backend
  const fetchServiceRequests = async () => {
    setLoadingServiceRequests(true);
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/service-request`;
      console.log("Fetching service requests from:", url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched service requests:", data);
      setServiceRequests(Array.isArray(data) ? data : []);
      setErrorServiceRequests("");
    } catch (err) {
      console.error("Service requests fetch error:", err);
      setErrorServiceRequests(
        `Failed to fetch service requests: ${(err as Error).message}`
      );
    } finally {
      setLoadingServiceRequests(false);
    }
  };

  // Fetch customer feedback from backend
  const fetchCustomerFeedback = async () => {
    setLoadingFeedback(true);
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/customer-feedback`;
      console.log("Fetching customer feedback from:", url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched customer feedback:", data);
      setCustomerFeedback(Array.isArray(data) ? data : []);
      setErrorFeedback("");
    } catch (err) {
      console.error("Customer feedback fetch error:", err);
      setErrorFeedback(
        `Failed to fetch customer feedback: ${(err as Error).message}`
      );
    } finally {
      setLoadingFeedback(false);
    }
  };

  // Fetch partner applications from backend
  const fetchPartnerApplications = async () => {
    setLoadingApplications(true);
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/partner-application`;
      console.log("Fetching partner applications from:", url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched partner applications:", data);
      setPartnerApplications(Array.isArray(data) ? data : []);
      setErrorApplications("");
    } catch (err) {
      console.error("Partner applications fetch error:", err);
      setErrorApplications(
        `Failed to fetch partner applications: ${(err as Error).message}`
      );
    } finally {
      setLoadingApplications(false);
    }
  };

  // Fetch contact messages from backend
  const fetchContactMessages = async () => {
    setLoadingContactMessages(true);
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/contact-message`;
      console.log("Fetching contact messages from:", url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched contact messages:", data);
      setContactMessages(Array.isArray(data) ? data : []);
      setErrorContactMessages("");
    } catch (err) {
      console.error("Contact messages fetch error:", err);
      setErrorContactMessages(
        `Failed to fetch contact messages: ${(err as Error).message}`
      );
    } finally {
      setLoadingContactMessages(false);
    }
  };

  useEffect(() => {
    if (activeTab === "quotations") {
      fetchQuotations();
    } else if (activeTab === "products") {
      fetchProducts();
    } else if (activeTab === "services") {
      fetchServiceRequests();
    } else if (activeTab === "feedback") {
      fetchCustomerFeedback();
    } else if (activeTab === "partners") {
      fetchPartnerApplications();
    } else if (activeTab === "contact-messages") {
      fetchContactMessages();
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
      title: "Price Quotations",
      value: quotations.length.toString(),
      change: "+12%",
      icon: FileText,
      color: "text-blue-500",
    },
    {
      title: "Total Products",
      value: products.length.toString(),
      change: "+8%",
      icon: Package,
      color: "text-green-500",
    },
    {
      title: "Service Requests",
      value: serviceRequests.length.toString(),
      change: "+24%",
      icon: Wrench,
      color: "text-purple-500",
    },
    {
      title: "Customer Feedback",
      value: customerFeedback.length.toString(),
      change: "+18%",
      icon: MessageSquare,
      color: "text-cyan-500",
    },
    {
      title: "Contact Messages",
      value: contactMessages.length.toString(),
      change: "+32%",
      icon: Mail,
      color: "text-pink-500",
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
      <div style={{ cursor: "default" }} className="admin-dashboard">
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
              {/* Custom Two-Row Tab Layout */}
              <TabsList className="h-auto w-full p-0 bg-transparent mb-8">
                <div className="space-y-3 w-full">
                  {/* First Row - Main Management Tabs */}
                  <div className="bg-card/30 rounded-lg p-3 border border-border/50">
                    <div className="flex justify-between w-full">
                      <TabsTrigger
                        value="overview"
                        className="flex items-center gap-2 px-4 py-2 text-sm flex-1 justify-center rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <BarChart3 className="w-4 h-4" />
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="quotations"
                        className="flex items-center gap-2 px-4 py-2 text-sm flex-1 justify-center rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <FileText className="w-4 h-4" />
                        Quotations
                      </TabsTrigger>
                      <TabsTrigger
                        value="products"
                        className="flex items-center gap-2 px-4 py-2 text-sm flex-1 justify-center rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <Package className="w-4 h-4" />
                        Products
                      </TabsTrigger>
                      <TabsTrigger
                        value="services"
                        className="flex items-center gap-2 px-4 py-2 text-sm flex-1 justify-center rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <Wrench className="w-4 h-4" />
                        Services
                      </TabsTrigger>
                      <TabsTrigger
                        value="feedback"
                        className="flex items-center gap-2 px-4 py-2 text-sm flex-1 justify-center rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Feedback
                      </TabsTrigger>
                    </div>
                  </div>

                  {/* Second Row - Communication & System Tabs */}
                  <div className="bg-card/30 rounded-lg p-3 border border-border/50">
                    <div className="flex justify-between w-full">
                      <TabsTrigger
                        value="partners"
                        className="flex items-center gap-2 px-4 py-2 text-sm flex-1 justify-center rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <UserCheck className="w-4 h-4" />
                        Partners
                      </TabsTrigger>
                      <TabsTrigger
                        value="contact-messages"
                        className="flex items-center gap-2 px-4 py-2 text-sm flex-1 justify-center rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <Mail className="w-4 h-4" />
                        Messages
                      </TabsTrigger>
                      <TabsTrigger
                        value="analytics"
                        className="flex items-center gap-2 px-4 py-2 text-sm flex-1 justify-center rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <TrendingUp className="w-4 h-4" />
                        Analytics
                      </TabsTrigger>
                      <TabsTrigger
                        value="settings"
                        className="flex items-center gap-2 px-4 py-2 text-sm flex-1 justify-center rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </TabsTrigger>
                    </div>
                  </div>
                </div>
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

              {/* Price Quotations Tab */}
              <TabsContent value="quotations" className="space-y-6">
                <AdminPriceQuotations
                  quotations={quotations}
                  loading={loadingQuotations}
                  error={errorQuotations}
                  onRefresh={fetchQuotations}
                />
              </TabsContent>

              {/* Products Tab */}
              <TabsContent value="products" className="space-y-6">
                <AdminProducts
                  products={products}
                  loading={loadingProducts}
                  error={errorProducts}
                  onRefresh={fetchProducts}
                />
              </TabsContent>

              {/* Service Requests Tab */}
              <TabsContent value="services" className="space-y-6">
                <AdminServiceRequests
                  requests={serviceRequests}
                  loading={loadingServiceRequests}
                  error={errorServiceRequests}
                  onRefresh={fetchServiceRequests}
                />
              </TabsContent>

              {/* Customer Feedback Tab */}
              <TabsContent value="feedback" className="space-y-6">
                <AdminCustomerFeedback
                  feedbacks={customerFeedback}
                  loading={loadingFeedback}
                  error={errorFeedback}
                  onRefresh={fetchCustomerFeedback}
                />
              </TabsContent>

              {/* Partner Applications Tab */}
              <TabsContent value="partners" className="space-y-6">
                <AdminPartnerApplications
                  applications={partnerApplications}
                  loading={loadingApplications}
                  error={errorApplications}
                  onRefresh={fetchPartnerApplications}
                />
              </TabsContent>

              {/* Contact Messages Tab */}
              <TabsContent value="contact-messages" className="space-y-6">
                <AdminContactMessages
                  messages={contactMessages}
                  loading={loadingContactMessages}
                  error={errorContactMessages}
                  onRefresh={fetchContactMessages}
                />
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-8">
                <AdminAnalytics
                  salesData={salesData}
                  trafficData={trafficData}
                />
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
                        <p className="text-sm text-green-500">
                          {metric.change}
                        </p>
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
      </div>
    </PageLoadWrapper>
  );
};

export default AdminDashboard;
