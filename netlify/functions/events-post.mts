import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const password = process.env.ADMIN_PASSWORD;
  const auth = req.headers.get("authorization");
  if (!password || auth !== `Bearer ${password}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  if (!body.title || !body.date) {
    return new Response("Title and date are required", { status: 400 });
  }

  const now = new Date().toISOString();
  const id = `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  const event = {
    id,
    title: body.title,
    date: body.date,
    description: body.description || "",
    createdAt: now,
    updatedAt: now,
  };

  const store = getStore("events");
  await store.setJSON(id, event);

  return new Response(JSON.stringify(event), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
