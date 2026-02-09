export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

if (import.meta.env.PROD && API_URL.includes("localhost")) {
  console.warn(
    "WARNING: You are running in production mode but API_URL is set to localhost. " +
      "Please set VITE_API_URL in your environment variables.",
  );
}

// Any other frontend-specific env vars can be added here
export const CLIENT_BASE_URL =
  import.meta.env.VITE_CLIENT_BASE_URL || "http://localhost:5173";
