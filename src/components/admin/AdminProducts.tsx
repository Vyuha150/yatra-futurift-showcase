import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Package } from "lucide-react";
import ProductModal, { ProductFormValues } from "./ProductModal";

type Product = {
  _id?: string;
  title: string;
  description: string;
  features?: string[];
  image?: string;
  link?: string;
};

interface AdminProductsProps {
  // ...existing code...
  products: Product[];
  loading: boolean;
  error: string;
  onRefresh: () => void; // Add refresh function
}

import React from "react";

const AdminProducts = ({
  products,
  loading,
  error,
  onRefresh,
}: AdminProductsProps) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editProduct, setEditProduct] = React.useState<
    (ProductFormValues & { _id?: string }) | null
  >(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleAdd = () => {
    setEditProduct(null);
    setModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditProduct({
      _id: product._id,
      title: product.title,
      description: product.description,
      features: product.features || [],
      image: product.image || "",
      link: product.link || "",
    });
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setEditProduct(null);
  };

  const handleSave = async (product: ProductFormValues) => {
    setIsSubmitting(true);
    try {
      const url = editProduct
        ? `${API_URL}/api/products/${editProduct._id}`
        : `${API_URL}/api/products`;

      const method = editProduct ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Product saved:", result);

      // Refresh the products list
      onRefresh();
      handleClose();
    } catch (err) {
      console.error("Error saving product:", err);
      alert("Failed to save product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (productId: string) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/products/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Product deleted");

      // Refresh the products list
      onRefresh();
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Product Management</h2>
        <Button
          className="btn-primary flex items-center gap-2"
          onClick={handleAdd}
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>
      {loading ? (
        <div className="text-center py-8">Loading products...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : (
        <div className="grid gap-4">
          {products.length === 0 ? (
            <div className="text-center py-8">No products found.</div>
          ) : (
            products.map((product, index) => (
              <Card
                key={product._id || index}
                className="bg-card/50 border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-lg flex items-center justify-center overflow-hidden">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-14 h-14 object-cover rounded-lg"
                          />
                        ) : (
                          <Package className="w-8 h-8 text-neon-cyan" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {product.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {product.description}
                        </p>
                        {product.features &&
                          Array.isArray(product.features) && (
                            <ul className="text-xs text-muted-foreground list-disc ml-4">
                              {product.features.map(
                                (feature: string, i: number) => (
                                  <li key={i}>{feature}</li>
                                )
                              )}
                            </ul>
                          )}
                        {product.link && (
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neon-cyan text-xs underline"
                          >
                            View Product
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(product)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500"
                        onClick={() => handleDelete(product._id!)}
                        disabled={!product._id}
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
      <ProductModal
        open={modalOpen}
        onClose={handleClose}
        onSave={handleSave}
        initialValues={editProduct || undefined}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default AdminProducts;
