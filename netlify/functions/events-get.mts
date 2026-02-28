import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const store = getStore("events");
  const { blobs } = await store.list();

  const events = await Promise.all(
    blobs.map((blob) => store.get(blob.key, { type: "json" }))
  );

  const sorted = events
    .filter(Boolean)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return new Response(JSON.stringify(sorted), {
    headers: { "Content-Type": "application/json" },
  });
};
