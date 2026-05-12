import { fulltiltImages as Images } from "@/src/lib/fulltiltImages";
import { getSortedPostData, getPostData } from "@/src/lib/posts";
import getFormattedDate from "@/src/utils/getFormattedDate";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CloudinaryImage from "@/src/components/CloudinaryOptImage";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getSortedPostData();
  return posts.map((post) => ({ slug: post.slug }));
}

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fultiltdigital.co.uk"

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return {
      title: "",
      description: "",
      // robots: {index: false, follow: true},
    };
  }
  // const canonicalPath = `${SITE_URL}/blog/${slug}`
  // const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  // const imagePublicId = post.coverImage
  // ? Images[post.coverImage].src
  // : undefined;

  // const ogImageUrl =
  //     imagePublicId && cloudName
  //     ? `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${imagePublicId}`
  //     : undefined;

  return {
    title: post.title,
    description: post.description,
    // url: canonicalPath,
    // type: 'article'
    // images: ogImageUrl
    //     ? [{url: ogImageUrl, alt: post.coverImageAlt ?? post.title}]
    //     : undefined,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);
  if (!post) notFound();

  const {
    title,
    date,
    author,
    readTime,
    tags,
    bgColour,
    mainService,
    contentHtml,
  } = post;

  const formattedDate = getFormattedDate(date);

  const imageConfig = post.coverImage ? Images[post.coverImage] : undefined;
  //   const imagePublicId = imageConfig?.src;

  return (
    <main className="relative">
      <div className="absolute bg-linear-to-b from-brand-main to-transparent h-200 w-full -z-10" />
      <div className="max-w-200 mx-auto pt-32 px-8">
        <Link
          href={"/blog"}
          className="flex gap-2 items-center text-sm font-bold hover:text-accent-one transition-colors duration-300 w-fit mb-16 group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/arrow.svg"
            alt=""
            width={10}
            style={{ width: "16px", height: "auto" }}
            className="group-hover:rotate-45 transition-all duration-300 scale-x-[-1]"
          />
          Insights
        </Link>
        <p className="mb-8">
          <span className="sr-only">Service category: </span>
          <span className="font-bold">{mainService}</span>
        </p>
        <h1 className="text-4xl mb-4 font-semibold">{title}</h1>
        <p className="flex flex-wrap gap-4 mb-8 text-black font-semibold text-sm">
          {tags?.map((t) => {
            return (
              <span key={t} className="">
                {t}
              </span>
            );
          })}
        </p>
        {imageConfig && (
          <CloudinaryImage
            {...imageConfig}
            alt={post.coverImageAlt ?? imageConfig.alt}
            className="w-full h-full object-cover mb-4"
            priority
          />
        )}
        <div className="text-xs font-semibold mb-12 text-accent-one">
          <p className="">Created by {author}</p>
          <p>
            {formattedDate} &#183; {readTime}
          </p>
        </div>
        <section
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="prose prose-sm sm:prose-base md:prose-lg text-black  prose-headings:text-black prose-a:text-brand-main-dark prose-a:underline prose-a:underline-offset-4 prose-a:decoration-brand-main-dark prose-a:hover:text-brand-main prose-a:transition-colors prose-strong:text-black prose-strong:font-semibold
          prose-blockquote:border-l-4
    prose-blockquote:border-brand-main
    prose-blockquote:pl-4
    prose-blockquote:py-2
    prose-blockquote:italic
    prose-blockquote:text-balance
    prose-blockquote:text-accent-one prose-blockquote:bg-brand-main/20"
        ></section>
        <Link href={"/contact"} className="font-bold flex gap-x-2 group mt-8">
          Start the conversation
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/arrow.svg"
            alt=""
            width={10}
            style={{ width: "20px", height: "auto" }}
            className="group-hover:-rotate-45 transition-all duration-300"
          />
        </Link>
      </div>
    </main>
  );
}
