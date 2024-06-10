import { esbuildPlugin } from "@web/dev-server-esbuild";
import { playwrightLauncher } from "@web/test-runner-playwright";

const launchOptions = {
  headless: true,
  devtools: false,
};

/** @type {import('@web/test-runner').TestRunnerCoreConfig} */
const config = {
  files: ["test/**/*.test.ts"],
  nodeResolve: true,
  mimeTypes: {
    ".jpg": "image/jpg",
    ".png": "image/png",
    ".gif": "image/gif",
  },
  plugins: [
    esbuildPlugin({
      ts: true,
      js: true,
      target: "auto",
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
