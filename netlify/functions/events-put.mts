import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const password = process.env.ADMIN_PASSWORD;
  const auth = req.headers.get("authorization");
  if (!password || auth !== `Bearer ${password}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  if (!body.id) {
    return new Response("Event ID is required", { status: 400 });
  }

  const store = getStore("events");
  const existing = await store.get(body.id, { type: "json" });

  if (!existing) {
    return new Response("Event not found", { status: 404 });
  }

  const updated = {
    ...existing,
    title: body.title ?? existing.title,
    date: body.date ?? existing.date,
    description: body.description ?? existing.description,
    updatedAt: new Date().toISOString(),
  };

  await store.setJSON(body.id, updated);

  return new Response(JSON.stringify(updated), {
    headers: { "Content-Type": "application/json" },
  });
};
