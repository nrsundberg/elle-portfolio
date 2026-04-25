import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  ssr: {
    resolve: {
      conditions: ["workerd", "browser"],
      externalConditions: ["workerd", "browser"],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
