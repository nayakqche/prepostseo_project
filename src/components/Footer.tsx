"use client";

import Link from "next/link";
import { Zap, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">FitSEO</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Free online SEO tools to improve your website rankings, analyze content, and boost your digital presence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Popular Tools</h3>
            <ul className="space-y-2">
              {["Plagiarism Checker", "Word Counter", "Grammar Checker", "Paraphrasing Tool", "AI Content Detector"].map((tool) => (
                <li key={tool}>
                  <Link href="#" className="text-sm text-muted hover:text-primary transition-colors">
                    {tool}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Categories</h3>
            <ul className="space-y-2">
              {["SEO Tools", "AI Tools", "Text Analysis", "Image Tools", "Keyword Tools"].map((cat) => (
                <li key={cat}>
                  <Link href="#" className="text-sm text-muted hover:text-primary transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Contact", "Privacy Policy", "Terms of Service", "Blog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} FitSEO. All rights reserved.
          </p>
          <p className="text-sm text-muted flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-danger fill-danger" /> for the SEO community
          </p>
        </div>
      </div>
    </footer>
  );
}
