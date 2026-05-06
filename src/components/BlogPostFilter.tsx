"use client";

import { useState } from "react";
import { BlogPost } from "@/types";
import BlogPostCard from "./BlogPostCard";
import getFormattedDate from "../utils/getFormattedDate";

const services = [
  "All",
  "Website + Digital",
  "Brand + Identity",
  "Video + Photography",
  "Social + Content",
  "Design + Illustration",
  "SEO",
];

type BlogPostFilterProps = {
  posts: BlogPost[];
};

export default function BlogPostFilter({ posts }: BlogPostFilterProps) {
  const [activeService, setActiveService] = useState("All");

  const filteredPosts =
    activeService === "All"
      ? posts
      : posts.filter((post) => post.mainService === activeService);

  return (
    <section className="max-w-300 mx-auto px-8">
      <div className="mb-8 flex flex-wrap gap-3">
        {services.map((service) => (
          <button
            key={service}
            type="button"
            onClick={() => setActiveService(service)}
            className={`rounded-full border cursor-pointer px-4 py-2 text-sm font-semibold transition-colors ${
              activeService === service
                ? "border-brand-main bg-brand-main"
                : "border-brand-main/50 hover:border-brand-main hover:bg-brand-main/50"
            }`}
          >
            {service}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {filteredPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            post={post}
            formattedDate={getFormattedDate(post.date)}
          />
        ))}
      </div>
    </section>
  );
}
