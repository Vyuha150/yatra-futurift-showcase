import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (project: ProjectFormValues) => void;
  initialValues?: ProjectFormValues;
}

export type ProjectFormValues = {
  name: string;
  location: string;
  type: string;
  status: string;
  elevators: number;
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
  onSave,
  initialValues,
}) => {
  const [form, setForm] = React.useState<ProjectFormValues>(
    initialValues || {
      name: "",
      location: "",
      type: "",
      status: "",
      elevators: 0,
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleElevatorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, elevators: Number(e.target.value) });
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
            {initialValues ? "Edit Project" : "Add Project"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Project Name"
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
          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="Type"
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
            <option value="">Select Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Planning">Planning</option>
            <option value="On Hold">On Hold</option>
          </select>
          <input
            name="elevators"
            type="number"
            value={form.elevators}
            onChange={handleElevatorsChange}
            placeholder="Number of Elevators"
            className="w-full p-2 border rounded"
            min={0}
            required
          />
          <DialogFooter>
            <Button type="submit">
              {initialValues ? "Save Changes" : "Add Project"}
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

export default ProjectModal;
