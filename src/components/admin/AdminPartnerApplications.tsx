import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Check, X, Users, Trash2 } from "lucide-react";

type PartnerApplication = {
  _id?: string;
  businessName: string;
  ownerName: string;
  phoneNumber: string;
  email: string;
  businessAddress: string;
  natureOfBusiness: string[];
  otherNature?: string;
  yearsInOperation: string;
  regionsServed: string;
  representsOtherBrands: string;
  otherBrands?: string;
  reason: string;
  exclusiveRegion: boolean;
  acceptTerms: boolean;
  profileFileName?: string;
  status?: "pending" | "approved" | "rejected";
  createdAt?: string;
};

interface AdminPartnerApplicationsProps {
  applications: PartnerApplication[];
  loading: boolean;
  error: string;
  onRefresh: () => void;
}

const AdminPartnerApplications: React.FC<AdminPartnerApplicationsProps> = ({
  applications,
  loading,
  error,
  onRefresh,
}) => {
  const [processingId, setProcessingId] = React.useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleStatusUpdate = async (
    applicationId: string,
    status: "approved" | "rejected"
  ) => {
    if (!applicationId) return;

    setProcessingId(applicationId);
    try {
      const response = await fetch(
        `${API_URL}/api/partner-application/${applicationId}/status`,
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

      console.log(`Application ${status}`);
      onRefresh();
    } catch (err) {
      console.error("Error updating application status:", err);
      alert("Failed to update application status. Please try again.");
    } finally {
      setProcessingId(null);
    }
  };

  const handleDelete = async (applicationId: string) => {
    if (!applicationId) return;

    if (!window.confirm("Are you sure you want to delete this application?")) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/partner-application/${applicationId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Application deleted");
      onRefresh();
    } catch (err) {
      console.error("Error deleting application:", err);
      alert("Failed to delete application. Please try again.");
    }
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500 text-white">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-500 text-white">Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-500 text-black">Pending</Badge>;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Partner Applications</h2>
        <Button
          className="btn-primary flex items-center gap-2"
          onClick={onRefresh}
        >
          <Users className="w-4 h-4" />
          Refresh Applications
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading applications...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : (
        <div className="grid gap-4">
          {applications.length === 0 ? (
            <div className="text-center py-8">
              No partner applications found.
            </div>
          ) : (
            applications.map((application, index) => (
              <Card
                key={application._id || index}
                className="bg-card/50 border-border"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {application.businessName}
                        </h3>
                        {getStatusBadge(application.status)}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1">
                            <strong>Owner:</strong> {application.ownerName}
                          </p>
                          <p className="text-muted-foreground mb-1">
                            <strong>Email:</strong> {application.email}
                          </p>
                          <p className="text-muted-foreground mb-1">
                            <strong>Phone:</strong> {application.phoneNumber}
                          </p>
                          <p className="text-muted-foreground mb-1">
                            <strong>Address:</strong>{" "}
                            {application.businessAddress}
                          </p>
                        </div>

                        <div>
                          <p className="text-muted-foreground mb-1">
                            <strong>Nature of Business:</strong>{" "}
                            {application.natureOfBusiness.join(", ")}
                            {application.otherNature &&
                              `, ${application.otherNature}`}
                          </p>
                          <p className="text-muted-foreground mb-1">
                            <strong>Years in Operation:</strong>{" "}
                            {application.yearsInOperation}
                          </p>
                          <p className="text-muted-foreground mb-1">
                            <strong>Regions Served:</strong>{" "}
                            {application.regionsServed}
                          </p>
                          <p className="text-muted-foreground mb-1">
                            <strong>Represents Other Brands:</strong>{" "}
                            {application.representsOtherBrands}
                          </p>
                        </div>
                      </div>

                      {application.reason && (
                        <div className="mt-3">
                          <p className="text-sm text-muted-foreground">
                            <strong>Reason for Partnership:</strong>{" "}
                            {application.reason}
                          </p>
                        </div>
                      )}

                      <div className="mt-2 text-xs text-muted-foreground">
                        Applied on: {formatDate(application.createdAt)}
                      </div>
                    </div>

                    <div className="flex flex-col items-center space-y-2 ml-4">
                      {application.status === "pending" && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 hover:bg-green-50"
                            onClick={() =>
                              handleStatusUpdate(application._id!, "approved")
                            }
                            disabled={processingId === application._id}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:bg-red-50"
                            onClick={() =>
                              handleStatusUpdate(application._id!, "rejected")
                            }
                            disabled={processingId === application._id}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </>
                      )}

                      {application.profileFileName && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-blue-600"
                          title="Download Profile"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      )}

                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500"
                        onClick={() => handleDelete(application._id!)}
                        disabled={!application._id}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPartnerApplications;
