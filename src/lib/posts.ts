import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { promises as fs } from "fs";
import { BlogPost, BlogPostWithHtml } from "../../types";
import { fulltiltImages } from "./fulltiltImages";
import { FulltiltImageKey } from "./fulltiltImages";

const postsDirectory = path.join(process.cwd(), "blogposts");

const toStringOrUndefined = (v: unknown) =>
  typeof v === "string" && v.trim() ? v.trim() : undefined;

const toStringRequired = (v: unknown, field: string, fileName: string) => {
  const value = toStringOrUndefined(v);
  if (!value) throw new Error(`Missing "${field}" in frontmatter: ${fileName}`);
  return value;
};

const isResponseImageKey = (v: unknown): v is FulltiltImageKey =>
  typeof v === "string" && v in fulltiltImages;

export async function getSortedPostData(): Promise<BlogPost[]> {
  const fileNames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");

        const { data } = matter(fileContents);

        const post: BlogPost = {
          slug,
          title: toStringRequired(data.title, "title", fileName),
          date: toStringRequired(data.date, "date", fileName),
          description: toStringRequired(
            data.description,
            "description",
            fileName,
          ),
          // coverImage: toStringOrUndefined(data.coverImage),
          coverImage: isResponseImageKey(data.coverImage)
            ? data.coverImage
            : undefined,
          coverImageAlt: toStringOrUndefined(data.coverImageAlt),
          author: toStringOrUndefined(data.author),
          tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
          readTime: toStringOrUndefined(data.readTime),
          bgColour: toStringOrUndefined(data.bgColour),
          mainService: toStringOrUndefined(data.mainService),
          featured: Boolean(data.featured),
          modified: toStringOrUndefined(data.modified),
        };

        return post;
      }),
  );

  // Sort newest first (ISO date strings work well)
  //   return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostData(
  slug: string,
): Promise<BlogPostWithHtml | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: toStringRequired(data.title, "title", `${slug}.md`),
      date: toStringRequired(data.date, "date", `${slug}.md`),
      description: toStringRequired(
        data.description,
        "description",
        `${slug}.md`,
      ),
      // coverImage: toStringOrUndefined(data.coverImage),
      coverImage: isResponseImageKey(data.coverImage)
        ? data.coverImage
        : undefined,
      coverImageAlt: toStringOrUndefined(data.coverImageAlt),
      author: toStringOrUndefined(data.author),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      readTime: toStringOrUndefined(data.readTime),
      bgColour: toStringOrUndefined(data.bgColour),
      mainService: toStringOrUndefined(data.mainService),
      featured: Boolean(data.featured),
      modified: toStringOrUndefined(data.modified),
      contentHtml,
    };
  } catch (error) {
    console.error(`Error fetching post data for slug "${slug}":`, error);
    return null;
  }
}
