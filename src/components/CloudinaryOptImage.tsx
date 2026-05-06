import Image from "next/image";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
  throw new Error(
    "Missing Cloudinary cloud name. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local",
  );
}

type CloudinaryImageProps = {
  src: string; // e.g., 'clients/flow-plumbing-drainage/hero.jpg'
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: CloudinaryImageProps) {
  // Use Cloudinary transformations: auto format and quality
  const cloudinaryUrl = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${src}`;

  return (
    <Image
      src={cloudinaryUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      // loading="lazy"
    />
  );
}
