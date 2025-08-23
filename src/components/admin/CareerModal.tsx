import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CareerModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (job: CareerFormValues) => void;
  initialValues?: CareerFormValues;
}

export type CareerFormValues = {
  title: string;
  department: string;
  type: string;
  location: string;
  applications: number;
  status: string;
  posted: string;
};

const CareerModal: React.FC<CareerModalProps> = ({
  open,
  onClose,
  onSave,
  initialValues,
}) => {
  const [form, setForm] = React.useState<CareerFormValues>(
    initialValues || {
      title: "",
      department: "",
      type: "",
      location: "",
      applications: 0,
      status: "Active",
      posted: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleApplicationsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, applications: Number(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  React.useEffect(() => {
    if (initialValues) setForm(initialValues);
  }, [initialValues]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialValues ? "Edit Job" : "Post New Job"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="department"
            value={form.department}
            onChange={handleChange}
            placeholder="Department"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="Type (Full-time, Contract, etc.)"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
            <option value="Closed">Closed</option>
          </select>
          <input
            name="applications"
            type="number"
            value={form.applications}
            onChange={handleApplicationsChange}
            placeholder="Number of Applications"
            className="w-full p-2 border rounded"
            min={0}
            required
          />
          <input
            name="posted"
            value={form.posted}
            onChange={handleChange}
            placeholder="Posted (e.g. '2 days ago')"
            className="w-full p-2 border rounded"
          />
          <DialogFooter>
            <Button type="submit">
              {initialValues ? "Save Changes" : "Post Job"}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CareerModal;
