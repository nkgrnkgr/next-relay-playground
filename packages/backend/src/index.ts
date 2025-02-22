import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

// CORSミドルウェアを追加
app.use(
  "/*",
  cors({
    origin: (origin) => {
      // localhostからのリクエストを許可
      return origin?.includes("localhost") ? origin : null;
    },
    credentials: true, // クッキーなどの認証情報を許可する場合
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
  }),
);

app.get("/", (c) => {
  return c.json({
    message: "Hello Hono🔥",
  });
});

export default app;
