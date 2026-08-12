"use client";

import { Search, ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";

export default function Hero({
  onSearch,
}: {
  onSearch?: (query: string) => void;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-[0.03]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>100+ Free SEO & Content Tools</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Supercharge Your SEO with{" "}
            <span className="gradient-text">FitSEO</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            The all-in-one platform for SEO analysis, content optimization,
            plagiarism checking, and AI-powered writing tools. Free, fast, and
            built for results.
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 gradient-bg rounded-2xl opacity-20 group-focus-within:opacity-40 blur transition-opacity" />
              <div className="relative flex items-center bg-surface rounded-2xl border border-border shadow-lg">
                <Search className="w-5 h-5 text-muted ml-5 shrink-0" />
                <input
                  type="text"
                  placeholder="Search for any tool... (e.g., plagiarism checker, word counter)"
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="flex-1 px-4 py-4 text-base bg-transparent focus:outline-none placeholder:text-muted/60"
                />
                <button
                  className="mr-2 px-5 py-2.5 gradient-bg text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
                  onClick={() => {
                    document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-success" />
              </div>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-accent" />
              </div>
              <span>No Sign-up Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
