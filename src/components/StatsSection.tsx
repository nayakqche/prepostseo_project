"use client";

import { Users, Wrench, Globe, Star } from "lucide-react";

const stats = [
  { icon: Users, label: "Active Users", value: "2M+", color: "text-primary" },
  { icon: Wrench, label: "Free Tools", value: "100+", color: "text-secondary" },
  { icon: Globe, label: "Countries", value: "190+", color: "text-success" },
  { icon: Star, label: "User Rating", value: "4.8/5", color: "text-accent" },
];

export default function StatsSection() {
  return (
    <section className="py-12 border-y border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
              <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
