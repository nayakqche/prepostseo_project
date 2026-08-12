"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import PopularTools from "@/components/PopularTools";
import ToolsSection from "@/components/ToolsSection";
import ApiSection from "@/components/ApiSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      <main className="flex-1">
        <Hero onSearch={handleSearch} />
        <StatsSection />
        {!searchQuery && <PopularTools />}
        <ToolsSection searchQuery={searchQuery} />
        <ApiSection />
      </main>
      <Footer />
    </div>
  );
}
