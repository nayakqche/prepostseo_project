"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Tool } from "@/data/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[tool.icon] || Icons.Wrench;

  return (
    <Link href={`/tool/${tool.id}`}>
      <div className="tool-card group relative bg-surface border border-border rounded-2xl p-5 h-full cursor-pointer">
        {tool.popular && (
          <div className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider gradient-bg text-white rounded-full">
            Popular
          </div>
        )}
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors">
          {tool.name}
        </h3>
        <p className="text-xs text-muted leading-relaxed line-clamp-2">
          {tool.description}
        </p>
        <div className="mt-3 flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Use Tool</span>
          <ArrowRight className="w-3 h-3 ml-1" />
        </div>
      </div>
    </Link>
  );
}
