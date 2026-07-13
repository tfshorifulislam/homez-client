"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  ComposedChart,
  Legend
} from "recharts";

type Role = "admin" | "seller" | "buyer";

interface StatItem {
  title: string;
  value: string;
}

interface ChartData {
  month: string;
  sales?: number; 
  marketPrice?: number;
  revenue?: number;
  earnings?: number;
  budgetLimit?: number;
  tasks?: number;
  successRate?: number;
}

interface PieData {
  name: string;
  value: number;
}

interface ListItem {
  id: string;
  title: string;
  subtitle: string;
  statusText: string;
  statusColor: string;
}

interface DashboardConfig {
  title: string;
  subtitle: string;
  stats: StatItem[];
  chartData: ChartData[];
  pieData: PieData[];
  listTitle: string;
  listItems: ListItem[];
}

const roleConfig: Record<Role, DashboardConfig> = {
  admin: {
    title: "System Admin Dashboard",
    subtitle: "Real-time health status, user registrations, and platform commission metrics.",
    stats: [
      { title: "Total Live Properties", value: "1,420" },
      { title: "Verified Sellers", value: "184" },
      { title: "Active Buyers", value: "3,890" },
      { title: "Platform Revenue (10% Commission)", value: "$54.2K" },
    ],
    chartData: [
      { month: "Jan", sales: 120, revenue: 15000, tasks: 40, successRate: 85 },
      { month: "Feb", sales: 145, revenue: 19000, tasks: 45, successRate: 88 },
      { month: "Mar", sales: 130, revenue: 17500, tasks: 50, successRate: 82 },
      { month: "Apr", sales: 190, revenue: 24000, tasks: 65, successRate: 91 },
      { month: "May", sales: 220, revenue: 29000, tasks: 70, successRate: 94 },
      { month: "Jun", sales: 280, revenue: 38000, tasks: 85, successRate: 96 },
    ],
    pieData: [
      { name: "Apartments", value: 640 },
      { name: "Commercial Space", value: 380 },
      { name: "Independent Villas", value: 400 },
    ],
    listTitle: "System Operations Log",
    listItems: [
      { id: "1", title: "New Seller Application", subtitle: "Karim Real Estate Ltd applied for verification", statusText: "Pending Review", statusColor: "text-amber-600" },
      { id: "2", title: "High Value Transaction", subtitle: "Escrow closed for ID #9082 ($450,000)", statusText: "Completed", statusColor: "text-green-600" },
      { id: "3", title: "Reported Listing", subtitle: "Buyer reported incorrect location for 'Studio 11'", statusText: "Investigating", statusColor: "text-red-600" },
    ],
  },
  seller: {
    title: "Seller Console",
    subtitle: "Track your property performance, inquiries, and monthly payouts.",
    stats: [
      { title: "My Total Listings", value: "12" },
      { title: "Buyer Inquiries (Leads)", value: "48" },
      { title: "Properties Sold", value: "4" },
      { title: "Total Net Earnings", value: "$138,500" },
    ],
    chartData: [
      { month: "Jan", sales: 0, earnings: 10000, tasks: 5, successRate: 40 },
      { month: "Feb", sales: 1, earnings: 35000, tasks: 8, successRate: 60 },
      { month: "Mar", sales: 0, earnings: 35000, tasks: 6, successRate: 50 },
      { month: "Apr", sales: 2, earnings: 85000, tasks: 12, successRate: 75 },
      { month: "May", sales: 0, earnings: 85000, tasks: 10, successRate: 70 },
      { month: "Jun", sales: 1, earnings: 138500, tasks: 15, successRate: 85 },
    ],
    pieData: [
      { name: "Active Listings", value: 7 },
      { name: "Under Contract", value: 3 },
      { name: "Sold / Closed", value: 2 },
    ],
    listTitle: "My Property Status & Offers",
    listItems: [
      { id: "1", title: "Luxury Duplex - Gulshan", subtitle: "Received a cash offer from Client #22", statusText: "$310K Offered", statusColor: "text-blue-600" },
      { id: "2", title: "Modern Studio - Dhanmondi", subtitle: "Scheduled physical tour with 3 clients", statusText: "4 Tours Booked", statusColor: "text-purple-600" },
      { id: "3", title: "Suburban Villa - Uttara", subtitle: "Listing description needs review by admin", statusText: "Live", statusColor: "text-green-600" },
    ],
  },
  buyer: {
    title: "Buyer Preference Portal",
    subtitle: "Monitor your property shortlists, agent communications, and legal offers.",
    stats: [
      { title: "Saved / Starred Houses", value: "18" },
      { title: "Active Offers Submitted", value: "2" },
      { title: "Upcoming Property Tours", value: "3" },
      { title: "Pre-Approved Budget Limit", value: "$350,000" },
    ],
    chartData: [
      { month: "Jan", marketPrice: 4200, budgetLimit: 250000, tasks: 4, successRate: 30 },
      { month: "Feb", marketPrice: 4350, budgetLimit: 270000, tasks: 6, successRate: 45 },
      { month: "Mar", marketPrice: 4300, budgetLimit: 270000, tasks: 5, successRate: 40 },
      { month: "Apr", marketPrice: 4500, budgetLimit: 300000, tasks: 9, successRate: 65 },
      { month: "May", marketPrice: 4750, budgetLimit: 320000, tasks: 11, successRate: 70 },
      { month: "Jun", marketPrice: 4900, budgetLimit: 350000, tasks: 14, successRate: 80 },
    ],
    pieData: [
      { name: "Properties Liked", value: 12 },
      { name: "Agent Contacted", value: 4 },
      { name: "Offer Declined", value: 2 },
    ],
    listTitle: "My Saved Shortlists & Purchases",
    listItems: [
      { id: "1", title: "Premium Apartment - Banani", subtitle: "Seller countered your offer. Waiting for your reply.", statusText: "Action Required", statusColor: "text-red-600" },
      { id: "2", title: "Cozy Penthouse - Mirpur", subtitle: "Tour confirmed with agent for Friday 4:00 PM", statusText: "Tour Confirmed", statusColor: "text-amber-600" },
      { id: "3", title: "Eco-Friendly Flat - Purbachal", subtitle: "Price dropped by 5% since you added to wishlist", statusText: "Price Drop", statusColor: "text-green-600" },
    ],
  },
};

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

export default function DynamicDashboardPage() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { data: session } = useSession();

  const role = (session?.user?.role as Role) || "buyer";
  const currentData = roleConfig[role];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-8 bg-gray-50 p-4 md:p-6 min-h-screen">
      
      {/* Top Header & Role Displayer */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{currentData.title}</h1>
          <p className="text-gray-500 mt-1 text-sm max-w-2xl">{currentData.subtitle}</p>
        </div>
        
        <div className="rounded-lg border bg-white px-4 py-2 shadow-sm self-start sm:self-auto">
          <p className="text-xs text-gray-500 font-medium">Current Role</p>
          <p className="font-semibold capitalize text-gray-800 text-sm">{role}</p>
        </div>
      </div>

      {/* Dynamic Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {currentData.stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm transition-all hover:shadow-md"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{item.title}</p>
            <h2 className="mt-2 text-xl md:text-2xl font-bold text-gray-900">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      {!mounted ? (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-[340px] animate-pulse rounded-xl bg-gray-200" />
          <div className="h-[340px] animate-pulse rounded-xl bg-gray-200" />
          <div className="h-[340px] animate-pulse rounded-xl bg-gray-200" />
          <div className="h-[340px] animate-pulse rounded-xl bg-gray-200" />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Chart 1: Volume/Price Trend (Line or Bar) */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <h2 className="mb-5 text-base md:text-lg font-semibold text-gray-800">
              {role === "buyer" ? "Average Market Price Trend (USD / Sq. Ft)" : "Sales Analytics Volume"}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              {role === "buyer" ? (
                <LineChart data={currentData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Line name="Market Price" type="monotone" dataKey="marketPrice" stroke="#3b82f6" strokeWidth={3} activeDot={{ r: 6 }} />
                </LineChart>
              ) : (
                <BarChart data={currentData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar name="Properties Sold" dataKey="sales" radius={[4, 4, 0, 0]} fill={role === "admin" ? "#10b981" : "#3b82f6"} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Chart 2: Financial Growth Trend (Area Chart) - NEW */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <h2 className="mb-5 text-base md:text-lg font-semibold text-gray-800">
              {role === "admin" ? "Platform Revenue Growth ($)" : role === "seller" ? "Net Earnings Timeline ($)" : "Pre-Approved Budget Scale ($)"}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={currentData.chartData}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip />
                <Legend />
                <Area 
                  name={role === "admin" ? "Revenue" : role === "seller" ? "Earnings" : "Budget Limit"} 
                  type="monotone" 
                  dataKey={role === "admin" ? "revenue" : role === "seller" ? "earnings" : "budgetLimit"} 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorGrowth)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 3: Performance & Success Matrix (Composed Chart) - NEW */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <h2 className="mb-5 text-base md:text-lg font-semibold text-gray-800">
              User Interactions vs Success Rate
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={currentData.chartData}>
                <CartesianGrid stroke="#f3f4f6" />
                <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar name="Platform Activities / Inquiries" dataKey="tasks" barSize={20} fill="#f59e0b" radius={[4, 4, 0, 0]} />
                <Line name="Success / Conversion Rate (%)" type="monotone" dataKey="successRate" stroke="#10b981" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 4: Categorical Distribution (Pie Chart) */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <h2 className="mb-5 text-base md:text-lg font-semibold text-gray-800">
              {role === "admin" ? "Platform Inventory Spread" : role === "seller" ? "Listings Pipeline Breakdown" : "Engagement Segmentation"}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={currentData.pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  innerRadius={65}
                  paddingAngle={5}
                  label
                >
                  {currentData.pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      )}

      {/* Contextual Activity / Data List */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
        <h2 className="mb-5 text-base md:text-lg font-semibold text-gray-800">
          {currentData.listTitle}
        </h2>

        <div className="divide-y divide-gray-100">
          {currentData.listItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0 transition-colors hover:bg-gray-50/50 px-2 rounded-lg"
            >
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>

              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100/80 ${item.statusColor}`}>
                {item.statusText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}