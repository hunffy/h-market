export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://h-market-server.fly.dev"
    : "http://localhost:8080";
