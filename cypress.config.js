import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "j75jw5",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://localhost:4321",
    supportFile: false,
  },
});
