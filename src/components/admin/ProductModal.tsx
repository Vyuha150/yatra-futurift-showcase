import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (product: ProductFormValues) => void;
  initialValues?: ProductFormValues;
  isSubmitting?: boolean;
}

export type ProductFormValues = {
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
};

const ProductModal: React.FC<ProductModalProps> = ({
  open,
  onClose,
  onSave,
  initialValues,
  isSubmitting = false,
}) => {
  const [form, setForm] = React.useState<ProductFormValues>(
    initialValues || {
      title: "",
      description: "",
      features: [],
      image: "",
      link: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, features: e.target.value.split("\n") });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  React.useEffect(() => {
    if (initialValues) {
      setForm(initialValues);
    } else {
      // Reset form when no initial values (add mode)
      setForm({
        title: "",
        description: "",
        features: [],
        image: "",
        link: "",
      });
    }
  }, [initialValues]);

  // Reset form when modal opens
  React.useEffect(() => {
    if (open) {
      if (initialValues) {
        setForm(initialValues);
      } else {
        setForm({
          title: "",
          description: "",
          features: [],
          image: "",
          link: "",
        });
      }
    }
  }, [open, initialValues]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialValues ? "Edit Product" : "Add Product"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-3 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            style={{ caretColor: "white" }}
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[80px]"
            style={{ caretColor: "white" }}
            required
          />
          <textarea
            name="features"
            value={form.features.join("\n")}
            onChange={handleFeaturesChange}
            placeholder="Features (one per line)"
            className="w-full p-3 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[100px]"
            style={{ caretColor: "white" }}
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-3 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            style={{ caretColor: "white" }}
          />
          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            placeholder="Product Link"
            className="w-full p-3 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            style={{ caretColor: "white" }}
          />
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Saving..."
                : initialValues
                ? "Save Changes"
                : "Add Product"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
