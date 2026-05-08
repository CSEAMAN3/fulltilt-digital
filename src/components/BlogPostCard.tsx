"use client";

import { BlogPost } from "@/types";
import { fulltiltImages as Images } from "@/src/lib/fulltiltImages";
import CloudinaryUnOpt from "@/src/components/CloudinaryUnOptImage";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

interface BlogPostCardProps {
  post: BlogPost;
  formattedDate: string;
}

const MotionLink = motion.create(Link);

export default function BlogPostCard({
  post,
  formattedDate,
}: BlogPostCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 40 });

  const background = useMotionTemplate`
    radial-gradient(
      500px circle at ${smoothX}px ${smoothY}px,
      rgba(192, 144, 255, 0.48),
      transparent 45%
    ),
    radial-gradient(
      220px circle at ${smoothX}px ${smoothY}px,
      rgba(255, 255, 255, 0.22),
      transparent 40%
    )
  `;

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const imageKey = post.coverImage ?? "teamPhotoOne";

  return (
    <MotionLink
      href={`/blog/${post.slug}`}
      onMouseMove={handleMouseMove}
      className="group relative block w-full overflow-hidden rounded-xl border border-brand-main bg-brand-accent-one/50 p-12 transition-all duration-300 hover:border-brand-main/80 hover:bg-brand-accent-one/90 hover:shadow-[0_0_40px_rgba(192,144,255,0.18)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/points-v2.svg"
        // src="/images/purple-green-points-small.svg"
        // src="/images/shape.png"
        alt=""
        width={10}
        style={{ width: "240px", height: "auto" }}
        className="absolute bottom-0 right-0"
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10">
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-accent-one flex-1">
              {post.title}
            </h2>
            <div className="text-white/40 transition-all duration-300 delay-75 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:text-[#c090ff]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/arrow.svg"
                alt=""
                width={10}
                style={{ width: "24px", height: "auto" }}
                className="group-hover:-rotate-45 transition-all duration-300"
              />
            </div>
          </div>
          <p className="mb-4 text-balance min-h-20">{post.description}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-baseline">
            <p className="font-bold">
              <span className="sr-only">Service category: </span>
              {post.mainService}
            </p>
            <p className="mb-4 text-lg font-bold">{post.readTime}</p>
          </div>

          <div className="mb-4 flex flex-wrap gap-x-4">
            {post.tags?.map((tag, idx) => (
              <p key={idx} className={`text-sm font-semibold text-accent-six`}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="place-content-center">
          <CloudinaryUnOpt
            {...Images[imageKey]}
            className="h-full object-cover mb-2"
          />
          <p className="text-xs font-semibold text-accent-one mb-1">
            Created by {post.author}
          </p>
          <p className="text-xs font-semibold text-accent-one">
            {formattedDate}
          </p>
        </div>
      </div>
    </MotionLink>
  );
}
