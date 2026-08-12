"use client";

import { popularTools } from "@/data/tools";
import ToolCard from "./ToolCard";
import { TrendingUp } from "lucide-react";

export default function PopularTools() {
  return (
    <section className="py-16 sm:py-20 bg-surface-hover/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Most Popular Tools</h2>
            <p className="text-sm text-muted">Trusted by millions of users worldwide</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {popularTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
