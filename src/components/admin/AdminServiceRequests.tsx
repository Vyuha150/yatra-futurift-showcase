import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Download,
  Trash2,
  Wrench,
  Building,
  Phone,
  Mail,
  Calendar,
  Clock,
} from "lucide-react";

type ServiceRequest = {
  _id?: string;
  clientName: string;
  companyName: string;
  phone: string;
  email: string;
  address: string;
  equipmentType: string;
  modelName: string;
  installationDate: string;
  issueTypes: string[];
  otherIssue?: string;
  preferredDateTime: string;
  acknowledgeCharges: boolean;
  status?: "pending" | "in-progress" | "completed" | "cancelled";
  createdAt?: string;
};

interface AdminServiceRequestsProps {
  requests: ServiceRequest[];
  loading: boolean;
  error: string;
  onRefresh: () => void;
}

const AdminServiceRequests: React.FC<AdminServiceRequestsProps> = ({
  requests,
  loading,
  error,
  onRefresh,
}) => {
  const [deletingId, setDeletingId] = React.useState<string | null>(null);
  const [updatingId, setUpdatingId] = React.useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleStatusUpdate = async (
    requestId: string,
    status: "pending" | "in-progress" | "completed" | "cancelled"
  ) => {
    if (!requestId) return;

    setUpdatingId(requestId);
    try {
      const response = await fetch(
        `${API_URL}/api/service-request/${requestId}/status`,
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

      console.log(`Service request ${status}`);
      onRefresh();
    } catch (err) {
      console.error("Error updating service request status:", err);
      alert("Failed to update service request status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (requestId: string) => {
    if (!requestId) return;

    if (
      !window.confirm("Are you sure you want to delete this service request?")
    ) {
      return;
    }

    setDeletingId(requestId);
    try {
      const response = await fetch(
        `${API_URL}/api/service-request/${requestId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Service request deleted");
      onRefresh();
    } catch (err) {
      console.error("Error deleting service request:", err);
      alert("Failed to delete service request. Please try again.");
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
      pending: "bg-yellow-500/20 text-yellow-300",
      "in-progress": "bg-blue-500/20 text-blue-300",
      completed: "bg-green-500/20 text-green-300",
      cancelled: "bg-red-500/20 text-red-300",
    };
    return colors[status || "pending"] || colors.pending;
  };

  const getEquipmentColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Elevator: "bg-cyan-500/20 text-cyan-300",
      Escalator: "bg-purple-500/20 text-purple-300",
      Travelator: "bg-orange-500/20 text-orange-300",
    };
    return colors[type] || "bg-gray-500/20 text-gray-300";
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Service Requests</h2>
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
          <h2 className="text-2xl font-bold text-white">Service Requests</h2>
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
          <h2 className="text-2xl font-bold text-white">Service Requests</h2>
          <p className="text-gray-400">Manage customer service requests</p>
        </div>
        <Button onClick={onRefresh} variant="outline">
          <Wrench className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-6">
        {requests.length === 0 ? (
          <Card className="bg-card/50 border-border">
            <CardContent className="p-12 text-center">
              <Wrench className="w-16 h-16 mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No Service Requests
              </h3>
              <p className="text-gray-400">
                No service requests have been submitted yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          requests.map((request) => (
            <Card
              key={request._id}
              className="bg-card/50 border-border hover:bg-card/70 transition-colors"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-white text-lg">
                      {request.clientName}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        className={getEquipmentColor(request.equipmentType)}
                      >
                        <Wrench className="w-3 h-3 mr-1" />
                        {request.equipmentType} - {request.modelName}
                      </Badge>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status || "pending"}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={request.status || "pending"}
                      onChange={(e) =>
                        handleStatusUpdate(
                          request._id!,
                          e.target.value as
                            | "pending"
                            | "in-progress"
                            | "completed"
                            | "cancelled"
                        )
                      }
                      disabled={updatingId === request._id}
                      className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(request._id!)}
                      disabled={deletingId === request._id}
                      className="text-red-400 hover:text-red-300 hover:border-red-400"
                    >
                      {deletingId === request._id ? (
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
                      <Building className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Company:</span>
                      <span className="text-white">
                        {request.companyName || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Phone:</span>
                      <span className="text-white">{request.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{request.email}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Installation:</span>
                      <span className="text-white">
                        {request.installationDate || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Preferred Time:</span>
                      <span className="text-white">
                        {request.preferredDateTime || "N/A"}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">
                        Charges Acknowledged:
                      </span>
                      <span className="text-white ml-2">
                        {request.acknowledgeCharges ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-400">Address:</span>
                    <p className="text-white mt-1">{request.address}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-gray-400 text-sm">Issue Types:</span>
                  <div className="flex flex-wrap gap-2">
                    {request.issueTypes.map((issue, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-orange-400 border-orange-400"
                      >
                        {issue}
                      </Badge>
                    ))}
                  </div>
                </div>

                {request.otherIssue && (
                  <div className="space-y-2">
                    <span className="text-gray-400 text-sm">Other Issue:</span>
                    <p className="text-white text-sm bg-gray-800/50 p-3 rounded-lg">
                      {request.otherIssue}
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-sm text-gray-400">
                    Submitted: {formatDate(request.createdAt)}
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

export default AdminServiceRequests;
