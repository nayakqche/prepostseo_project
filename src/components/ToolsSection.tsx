"use client";

import { useState, useMemo } from "react";
import { categories, getToolsByCategory, searchTools } from "@/data/tools";
import ToolCard from "./ToolCard";
import * as Icons from "lucide-react";

export default function ToolsSection({ searchQuery }: { searchQuery: string }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedTools = useMemo(() => {
    if (searchQuery.trim()) {
      return searchTools(searchQuery);
    }
    return getToolsByCategory(activeCategory);
  }, [activeCategory, searchQuery]);

  return (
    <section id="tools" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {searchQuery ? "Search Results" : "All SEO Tools"}
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            {searchQuery
              ? `Found ${displayedTools.length} tool${displayedTools.length !== 1 ? "s" : ""} matching "${searchQuery}"`
              : "Browse our complete collection of free SEO and content tools"}
          </p>
        </div>

        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[cat.icon] || Icons.Grid3X3;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`category-pill flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full border border-border transition-all ${
                    activeCategory === cat.id
                      ? "gradient-bg text-white border-transparent shadow-md shadow-primary/20"
                      : "bg-surface text-muted hover:text-foreground"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayedTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {displayedTools.length === 0 && (
          <div className="text-center py-16">
            <Icons.SearchX className="w-12 h-12 text-muted/40 mx-auto mb-4" />
            <p className="text-lg font-medium text-muted">No tools found</p>
            <p className="text-sm text-muted/70 mt-1">
              Try a different search term
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
