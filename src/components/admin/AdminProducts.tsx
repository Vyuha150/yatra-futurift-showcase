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
}

import React from "react";

const AdminProducts = ({ products, loading, error }: AdminProductsProps) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editProduct, setEditProduct] =
    React.useState<ProductFormValues | null>(null);

  const handleAdd = () => {
    setEditProduct(null);
    setModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditProduct({
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

  const handleSave = (product: ProductFormValues) => {
    // TODO: Implement save logic (API call)
    handleClose();
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
      />
    </div>
  );
};

export default AdminProducts;
