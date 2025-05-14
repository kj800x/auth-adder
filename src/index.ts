import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

const target = process.env["UPSTREAM"];
const token = process.env["BEARER_TOKEN"];

if (!target) {
  console.error("UPSTREAM environment variable is not set");
}
if (!token) {
  console.error("BEARER_TOKEN environment variable is not set");
}
if (!token || !target) {
  process.exit(1);
}

app.use(
  "/",
  createProxyMiddleware({
    target,
    changeOrigin: true,
    secure: false,
    on: {
      proxyReq: (proxyReq) => {
        proxyReq.setHeader("Authorization", `Bearer ${token}`);
      },
    },
  })
);

const PORT = process.env["PORT"] || 80;
app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`);
});
