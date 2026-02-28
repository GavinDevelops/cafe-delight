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
  await store.delete(body.id);

  return new Response(JSON.stringify({ deleted: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
