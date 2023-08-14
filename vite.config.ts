/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "heartBeats-Front/dist",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
