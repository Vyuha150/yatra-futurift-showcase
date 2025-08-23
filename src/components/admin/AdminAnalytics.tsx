import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  LineChart,
  Line,
} from "recharts";

type SalesData = { name: string; value: number; users?: number };
type TrafficData = { name: string; visitors: number; pageViews: number };

interface AdminAnalyticsProps {
  salesData: SalesData[];
  trafficData: TrafficData[];
}

const AdminAnalytics = ({ salesData, trafficData }: AdminAnalyticsProps) => (
  <div className="grid lg:grid-cols-2 gap-8">
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Product Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#06b6d4" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>User Engagement</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#10b981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);

export default AdminAnalytics;
