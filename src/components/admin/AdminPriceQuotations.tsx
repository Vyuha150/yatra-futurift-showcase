import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Download,
  Trash2,
  FileText,
  Building,
  Phone,
  Mail,
} from "lucide-react";

type PriceQuotation = {
  _id?: string;
  fullName: string;
  company: string;
  phone: string;
  email: string;
  buildingType: string;
  otherBuildingType?: string;
  address: string;
  floors: string;
  loadCapacity: string;
  productType: string;
  otherProductType?: string;
  modelPreference: string;
  notes: string;
  consent: boolean;
  createdAt?: string;
};

interface AdminPriceQuotationsProps {
  quotations: PriceQuotation[];
  loading: boolean;
  error: string;
  onRefresh: () => void;
}

const AdminPriceQuotations: React.FC<AdminPriceQuotationsProps> = ({
  quotations,
  loading,
  error,
  onRefresh,
}) => {
  const [deletingId, setDeletingId] = React.useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleDelete = async (quotationId: string) => {
    if (!quotationId) return;

    if (
      !window.confirm("Are you sure you want to delete this quotation request?")
    ) {
      return;
    }

    setDeletingId(quotationId);
    try {
      const response = await fetch(
        `${API_URL}/api/price-quotation/${quotationId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Quotation deleted");
      onRefresh();
    } catch (err) {
      console.error("Error deleting quotation:", err);
      alert("Failed to delete quotation. Please try again.");
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

  const getBuildingTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Residential: "bg-blue-500/20 text-blue-300",
      Commercial: "bg-green-500/20 text-green-300",
      Hospital: "bg-red-500/20 text-red-300",
      Industrial: "bg-yellow-500/20 text-yellow-300",
      Villa: "bg-purple-500/20 text-purple-300",
      Other: "bg-gray-500/20 text-gray-300",
    };
    return colors[type] || colors.Other;
  };

  const getProductTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Passenger Elevator": "bg-cyan-500/20 text-cyan-300",
      "Home Elevator": "bg-indigo-500/20 text-indigo-300",
      "Hospital Elevator": "bg-rose-500/20 text-rose-300",
      "Freight Elevator": "bg-orange-500/20 text-orange-300",
      "Capsule Elevator": "bg-teal-500/20 text-teal-300",
      Escalator: "bg-lime-500/20 text-lime-300",
      Travelator: "bg-emerald-500/20 text-emerald-300",
      Other: "bg-gray-500/20 text-gray-300",
    };
    return colors[type] || colors.Other;
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">
            Price Quotation Requests
          </h2>
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
          <h2 className="text-2xl font-bold text-white">
            Price Quotation Requests
          </h2>
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
          <h2 className="text-2xl font-bold text-white">
            Price Quotation Requests
          </h2>
          <p className="text-gray-400">Manage customer quotation requests</p>
        </div>
        <Button onClick={onRefresh} variant="outline">
          <FileText className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-6">
        {quotations.length === 0 ? (
          <Card className="bg-card/50 border-border">
            <CardContent className="p-12 text-center">
              <FileText className="w-16 h-16 mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No Quotation Requests
              </h3>
              <p className="text-gray-400">
                No price quotation requests have been submitted yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          quotations.map((quotation) => (
            <Card
              key={quotation._id}
              className="bg-card/50 border-border hover:bg-card/70 transition-colors"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-white text-lg">
                      {quotation.fullName}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        className={getBuildingTypeColor(quotation.buildingType)}
                      >
                        <Building className="w-3 h-3 mr-1" />
                        {quotation.buildingType}
                        {quotation.otherBuildingType &&
                          ` - ${quotation.otherBuildingType}`}
                      </Badge>
                      <Badge
                        className={getProductTypeColor(quotation.productType)}
                      >
                        {quotation.productType}
                        {quotation.otherProductType &&
                          ` - ${quotation.otherProductType}`}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(quotation._id!)}
                      disabled={deletingId === quotation._id}
                      className="text-red-400 hover:text-red-300 hover:border-red-400"
                    >
                      {deletingId === quotation._id ? (
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
                        {quotation.company || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Phone:</span>
                      <span className="text-white">{quotation.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{quotation.email}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="text-gray-400">Floors:</span>
                      <span className="text-white ml-2">
                        {quotation.floors}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Load Capacity:</span>
                      <span className="text-white ml-2">
                        {quotation.loadCapacity}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Model Preference:</span>
                      <span className="text-white ml-2">
                        {quotation.modelPreference || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-400">Address:</span>
                    <p className="text-white mt-1">{quotation.address}</p>
                  </div>
                </div>

                {quotation.notes && (
                  <div className="space-y-2">
                    <span className="text-gray-400 text-sm">Notes:</span>
                    <p className="text-white text-sm bg-gray-800/50 p-3 rounded-lg">
                      {quotation.notes}
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-sm text-gray-400">
                    Submitted: {formatDate(quotation.createdAt)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-green-400 border-green-400"
                    >
                      {quotation.consent ? "Consent Given" : "No Consent"}
                    </Badge>
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

export default AdminPriceQuotations;
