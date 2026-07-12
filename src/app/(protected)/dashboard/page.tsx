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
      { month: "Jan", sales: 120 },
      { month: "Feb", sales: 145 },
      { month: "Mar", sales: 130 },
      { month: "Apr", sales: 190 },
      { month: "May", sales: 220 },
      { month: "Jun", sales: 280 },
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
      { month: "Jan", sales: 0 },
      { month: "Feb", sales: 1 },
      { month: "Mar", sales: 0 },
      { month: "Apr", sales: 2 },
      { month: "May", sales: 0 },
      { month: "Jun", sales: 1 },
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
      { month: "Jan", marketPrice: 4200 },
      { month: "Feb", marketPrice: 4350 },
      { month: "Mar", marketPrice: 4300 },
      { month: "Apr", marketPrice: 4500 },
      { month: "May", marketPrice: 4750 },
      { month: "Jun", marketPrice: 4900 },
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
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      
      {/* Top Header & Role Displayer */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-5">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{currentData.title}</h1>
          <p className="text-gray-500 mt-1 text-sm max-w-2xl">{currentData.subtitle}</p>
        </div>
        
        {/* ড্রপডাউন এর জায়গায় সরাসরি Role ব্যাজ প্রদর্শন */}
        <div className="rounded-lg border bg-white px-4 py-2 shadow-sm self-start sm:self-auto">
          <p className="text-xs text-gray-500 font-medium">Current Role</p>
          <p className="font-semibold capitalize text-gray-800 text-sm">{role}</p>
        </div>
      </div>

      {/* Dynamic Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {currentData.stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{item.title}</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      {!mounted ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-[340px] animate-pulse rounded-xl bg-gray-200" />
          <div className="h-[340px] animate-pulse rounded-xl bg-gray-200" />
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          
          {/* Contextual Chart */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold text-gray-800">
              {role === "buyer" ? "Average Market Price Trend (BDT / Sq. Ft)" : "Sales Analytics Volume"}
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              {role === "buyer" ? (
                <LineChart data={currentData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip />
                  <Line type="monotone" dataKey="marketPrice" stroke="#3b82f6" strokeWidth={3} activeDot={{ r: 6 }} />
                </LineChart>
              ) : (
                <BarChart data={currentData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="sales" radius={[4, 4, 0, 0]} fill={role === "admin" ? "#10b981" : "#3b82f6"} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Contextual Pie Chart */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold text-gray-800">
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
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Contextual Activity / Data List */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold text-gray-800">
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