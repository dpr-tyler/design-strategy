import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BookMeta } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "books");

export function getAllBooks(): BookMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const books = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title as string,
      author: data.author as string,
      year: data.year as number,
      thesis: data.thesis as string,
      accent: data.accent as string | undefined,
      collection: data.collection as number | undefined,
    };
  });

  // Sort by year published
  return books.sort((a, b) => a.year - b.year);
}

export function getBookBySlug(slug: string): {
  meta: BookMeta;
  content: string;
} {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const meta: BookMeta = {
    slug,
    title: data.title as string,
    author: data.author as string,
    year: data.year as number,
    thesis: data.thesis as string,
    accent: data.accent as string | undefined,
    collection: data.collection as number | undefined,
  };

  return { meta, content };
}
