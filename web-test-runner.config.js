import { esbuildPlugin } from "@web/dev-server-esbuild";
import { playwrightLauncher } from "@web/test-runner-playwright";
import { fileURLToPath } from "url";

const launchOptions = {
  headless: true,
  devtools: false,
};

/** @type {import('@web/test-runner').TestRunnerCoreConfig} */
const config = {
  files: ["test/**/*.test.ts"],
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      js: true,
      target: "auto",
      loaders: { ".jpg": "file", ".gif": "file", ".png": "file" },
    }),
  ],
  concurrency: 3,
  browsers: [
    playwrightLauncher({
      product: "chromium",
      launchOptions,
    }),
    playwrightLauncher({
      product: "firefox",
      launchOptions,
    }),
    playwrightLauncher({
      product: "webkit",
      launchOptions,
    }),
  ],
  testFramework: {
    config: {
      ui: "bdd",
      timeout: "2000",
    },
  },
};

export default config;
