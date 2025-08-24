import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Download,
  Trash2,
  MessageCircle,
  User,
  Phone,
  Mail,
  Briefcase,
} from "lucide-react";

type ContactMessage = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType?: string;
  message: string;
  status?: "new" | "responded" | "closed";
  createdAt?: string;
};

interface AdminContactMessagesProps {
  messages: ContactMessage[];
  loading: boolean;
  error: string;
  onRefresh: () => void;
}

const AdminContactMessages: React.FC<AdminContactMessagesProps> = ({
  messages,
  loading,
  error,
  onRefresh,
}) => {
  const [deletingId, setDeletingId] = React.useState<string | null>(null);
  const [updatingId, setUpdatingId] = React.useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleStatusUpdate = async (
    messageId: string,
    status: "new" | "responded" | "closed"
  ) => {
    if (!messageId) return;

    setUpdatingId(messageId);
    try {
      const response = await fetch(
        `${API_URL}/api/contact-message/${messageId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log(`Contact message ${status}`);
      onRefresh();
    } catch (err) {
      console.error("Error updating contact message status:", err);
      alert("Failed to update message status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (messageId: string) => {
    if (!messageId) return;

    if (
      !window.confirm("Are you sure you want to delete this contact message?")
    ) {
      return;
    }

    setDeletingId(messageId);
    try {
      const response = await fetch(
        `${API_URL}/api/contact-message/${messageId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Contact message deleted");
      onRefresh();
    } catch (err) {
      console.error("Error deleting contact message:", err);
      alert("Failed to delete contact message. Please try again.");
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

  const getStatusColor = (status?: string) => {
    const colors: { [key: string]: string } = {
      new: "bg-blue-500/20 text-blue-300",
      responded: "bg-green-500/20 text-green-300",
      closed: "bg-gray-500/20 text-gray-300",
    };
    return colors[status || "new"] || colors.new;
  };

  const getProjectTypeColor = (type?: string) => {
    const colors: { [key: string]: string } = {
      "Elevator Installation": "bg-cyan-500/20 text-cyan-300",
      Maintenance: "bg-orange-500/20 text-orange-300",
      Repair: "bg-red-500/20 text-red-300",
      Consultation: "bg-purple-500/20 text-purple-300",
      Other: "bg-gray-500/20 text-gray-300",
    };
    return colors[type || "Other"] || colors.Other;
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Contact Messages</h2>
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
          <h2 className="text-2xl font-bold text-white">Contact Messages</h2>
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
          <h2 className="text-2xl font-bold text-white">Contact Messages</h2>
          <p className="text-gray-400">
            Manage customer inquiries and messages
          </p>
        </div>
        <Button onClick={onRefresh} variant="outline">
          <MessageCircle className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-6">
        {messages.length === 0 ? (
          <Card className="bg-card/50 border-border">
            <CardContent className="p-12 text-center">
              <MessageCircle className="w-16 h-16 mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No Contact Messages
              </h3>
              <p className="text-gray-400">
                No contact messages have been received yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          messages.map((message) => (
            <Card
              key={message._id}
              className="bg-card/50 border-border hover:bg-card/70 transition-colors"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-400" />
                      {message.firstName} {message.lastName}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {message.projectType && (
                        <Badge
                          className={getProjectTypeColor(message.projectType)}
                        >
                          <Briefcase className="w-3 h-3 mr-1" />
                          {message.projectType}
                        </Badge>
                      )}
                      <Badge className={getStatusColor(message.status)}>
                        {message.status || "new"}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={message.status || "new"}
                      onChange={(e) =>
                        handleStatusUpdate(
                          message._id!,
                          e.target.value as "new" | "responded" | "closed"
                        )
                      }
                      disabled={updatingId === message._id}
                      className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm"
                    >
                      <option value="new">New</option>
                      <option value="responded">Responded</option>
                      <option value="closed">Closed</option>
                    </select>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(message._id!)}
                      disabled={deletingId === message._id}
                      className="text-red-400 hover:text-red-300 hover:border-red-400"
                    >
                      {deletingId === message._id ? (
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
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{message.email}</span>
                    </div>
                    {message.phone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">Phone:</span>
                        <span className="text-white">{message.phone}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    {message.projectType && (
                      <div className="text-sm">
                        <span className="text-gray-400">Project Type:</span>
                        <span className="text-white ml-2">
                          {message.projectType}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-gray-400 text-sm">Message:</span>
                  <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-white leading-relaxed">
                      {message.message}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-sm text-gray-400">
                    Received: {formatDate(message.createdAt)}
                  </div>
                  <div className="flex items-center gap-2">
                    {message.status === "new" && (
                      <Badge className="bg-blue-500/20 text-blue-300">
                        Requires Response
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminContactMessages;
