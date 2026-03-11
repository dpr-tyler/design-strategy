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

export const COLLECTION_NAMES: Record<number, string> = {
  1: "Product Strategy",
  2: "Behavioral Economics & Strategy",
  3: "Psychology & Human Behavior",
  4: "Systems Thinking & Decision-Making",
  5: "Growth, Scaling & Business Models",
  6: "Leadership & Organizational Culture",
};

export function getCollections(books: BookMeta[]) {
  const ids = [...new Set(books.map((b) => b.collection).filter(Boolean))] as number[];
  return ids
    .sort((a, b) => a - b)
    .map((id) => ({ id, name: COLLECTION_NAMES[id] ?? `Collection ${id}` }));
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
