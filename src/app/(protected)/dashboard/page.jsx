"use client";

import { useEffect, useState } from "react";
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
} from "recharts";

const salesData = [
  { month: "Jan", sales: 12 },
  { month: "Feb", sales: 18 },
  { month: "Mar", sales: 15 },
  { month: "Apr", sales: 24 },
  { month: "May", sales: 30 },
  { month: "Jun", sales: 38 },
];

const propertyData = [
  { name: "Sold", value: 54 },
  { name: "Available", value: 74 },
];

const stats = [
  {
    title: "Total Properties",
    value: "128",
  },
  {
    title: "Sold Properties",
    value: "54",
  },
  {
    title: "Revenue",
    value: "$42.8K",
  },
  {
    title: "Rating",
    value: "4.9 ★",
  },
];

const COLORS = ["#22c55e", "#3b82f6"];

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your real estate business.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>

      {!mounted ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-[340px] animate-pulse rounded-xl bg-gray-100" />
          <div className="h-[340px] animate-pulse rounded-xl bg-gray-100" />
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Bar Chart */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">
              Monthly Property Sales
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="sales"
                  radius={[8, 8, 0, 0]}
                  fill="#2563eb"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">
              Property Status
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={propertyData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {propertyData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Recent Properties */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-semibold">
          Recent Properties
        </h2>

        <div className="space-y-4">
          {[
            {
              title: "Luxury Apartment",
              location: "Dhaka",
              price: "$120,000",
            },
            {
              title: "Modern Villa",
              location: "Chattogram",
              price: "$250,000",
            },
            {
              title: "Family House",
              location: "Sylhet",
              price: "$98,000",
            },
          ].map((property) => (
            <div
              key={property.title}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-500">
                  {property.location}
                </p>
              </div>

              <span className="font-bold text-blue-600">
                {property.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}