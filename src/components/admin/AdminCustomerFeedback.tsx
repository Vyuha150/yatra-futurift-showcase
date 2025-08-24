import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Download,
  Trash2,
  MessageSquare,
  Building,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";

type CustomerFeedback = {
  _id?: string;
  name: string;
  companyName?: string;
  email: string;
  phone?: string;
  productTypes: string[];
  otherProduct?: string;
  location?: string;
  feedback: string;
  showcasePermission: "Yes" | "No";
  createdAt?: string;
};

interface AdminCustomerFeedbackProps {
  feedbacks: CustomerFeedback[];
  loading: boolean;
  error: string;
  onRefresh: () => void;
}

const AdminCustomerFeedback: React.FC<AdminCustomerFeedbackProps> = ({
  feedbacks,
  loading,
  error,
  onRefresh,
}) => {
  const [deletingId, setDeletingId] = React.useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleDelete = async (feedbackId: string) => {
    if (!feedbackId) return;

    if (!window.confirm("Are you sure you want to delete this feedback?")) {
      return;
    }

    setDeletingId(feedbackId);
    try {
      const response = await fetch(
        `${API_URL}/api/customer-feedback/${feedbackId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Feedback deleted");
      onRefresh();
    } catch (err) {
      console.error("Error deleting feedback:", err);
      alert("Failed to delete feedback. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getProductTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Passenger Elevator": "bg-blue-500/20 text-blue-300",
      "Home Elevator": "bg-green-500/20 text-green-300",
      Freight: "bg-orange-500/20 text-orange-300",
      Escalator: "bg-purple-500/20 text-purple-300",
      Travelator: "bg-cyan-500/20 text-cyan-300",
      Other: "bg-gray-500/20 text-gray-300",
    };
    return colors[type] || colors.Other;
  };

  const getShowcaseColor = (permission: string) => {
    return permission === "Yes"
      ? "bg-green-500/20 text-green-300"
      : "bg-red-500/20 text-red-300";
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Customer Feedback</h2>
          <Button onClick={onRefresh} disabled className="opacity-50">
            Loading...
          </Button>
        </div>
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="bg-card/50 border-border animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-2/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Customer Feedback</h2>
          <Button onClick={onRefresh} variant="outline">
            Retry
          </Button>
        </div>
        <Card className="bg-red-500/10 border-red-500/20">
          <CardContent className="p-6">
            <p className="text-red-300">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Customer Feedback</h2>
          <p className="text-gray-400">
            Manage customer feedback and testimonials
          </p>
        </div>
        <Button onClick={onRefresh} variant="outline">
          <MessageSquare className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-6">
        {feedbacks.length === 0 ? (
          <Card className="bg-card/50 border-border">
            <CardContent className="p-12 text-center">
              <MessageSquare className="w-16 h-16 mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No Customer Feedback
              </h3>
              <p className="text-gray-400">
                No customer feedback has been submitted yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          feedbacks.map((feedback) => (
            <Card
              key={feedback._id}
              className="bg-card/50 border-border hover:bg-card/70 transition-colors"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      {feedback.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {feedback.productTypes.map((product, index) => (
                        <Badge
                          key={index}
                          className={getProductTypeColor(product)}
                        >
                          {product}
                        </Badge>
                      ))}
                      {feedback.otherProduct && (
                        <Badge className="bg-amber-500/20 text-amber-300">
                          {feedback.otherProduct}
                        </Badge>
                      )}
                      <Badge
                        className={getShowcaseColor(
                          feedback.showcasePermission
                        )}
                      >
                        Showcase: {feedback.showcasePermission}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(feedback._id!)}
                      disabled={deletingId === feedback._id}
                      className="text-red-400 hover:text-red-300 hover:border-red-400"
                    >
                      {deletingId === feedback._id ? (
                        "Deleting..."
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {feedback.companyName && (
                      <div className="flex items-center gap-2 text-sm">
                        <Building className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">Company:</span>
                        <span className="text-white">
                          {feedback.companyName}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{feedback.email}</span>
                    </div>
                    {feedback.phone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">Phone:</span>
                        <span className="text-white">{feedback.phone}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    {feedback.location && (
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">Location:</span>
                        <span className="text-white">{feedback.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-gray-400 text-sm">Feedback:</span>
                  <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-white leading-relaxed">
                      {feedback.feedback}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-sm text-gray-400">
                    Submitted: {formatDate(feedback.createdAt)}
                  </div>
                  {feedback.showcasePermission === "Yes" && (
                    <Badge className="bg-green-500/20 text-green-300">
                      Can use as testimonial
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminCustomerFeedback;
