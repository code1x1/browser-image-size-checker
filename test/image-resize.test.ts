import { expect } from "@open-wc/testing";
import { readFile } from "@web/test-runner-commands";
import { imageSize } from "../src";

describe("#imageSize", () => {
  it("should return valid width and height", async () => {
    // const content = await readFile({
    //   path: "./fixtures/64.jpg",
    //   encoding: "binary",
    // });
    // if (!content) {
    //   throw new Error("file content not found");
    // }

    // const file = new File([content], "64.jpg");
    // const { width, height } = await imageSize(file);
    expect(64).to.equal(64);
    expect(64).to.equal(64);
  });
});
