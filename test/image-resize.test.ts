import { expect } from "@open-wc/testing";
import { readFile } from "@web/test-runner-commands";
import { imageSize } from "../src";

describe("#imageSize", () => {
  it("should return valid width and height for jpg File/Blob", async () => {
    const content = await readFile({
      path: "./fixtures/64.jpg",
      encoding: "binary",
    });
    if (!content) {
      throw new Error("file content not found");
    }

    const file = new File([convertStringToBlob(content)], "64.jpg");
    const { width, height } = await imageSize(file);
    expect(width).to.equal(64);
    expect(height).to.equal(64);
  });

  it("should return valid width and height for gif File/Blob", async () => {
    const content = await readFile({
      path: "./fixtures/32.gif",
      encoding: "binary",
    });
    if (!content) {
      throw new Error("file content not found");
    }

    const file = new File([convertStringToBlob(content)], "32.gif");
    const { width, height } = await imageSize(file);
    expect(width).to.equal(32);
    expect(height).to.equal(32);
  });

  it("should return valid width and height for png File/Blob", async () => {
    const content = await readFile({
      path: "./fixtures/128.png",
      encoding: "binary",
    });
    if (!content) {
      throw new Error("file content not found");
    }

    const file = new File([convertStringToBlob(content)], "128.png");
    const { width, height } = await imageSize(file);
    expect(width).to.equal(128);
    expect(height).to.equal(128);
  });

  it("should return valid width and height for jpg link", async () => {
    const { width, height } = await imageSize("/test/fixtures/64.jpg");
    expect(width).to.equal(64);
    expect(height).to.equal(64);
  });

  it("should return valid width and height for gif link", async () => {
    const { width, height } = await imageSize("/test/fixtures/32.gif");
    expect(width).to.equal(32);
    expect(height).to.equal(32);
  });

  it("should return valid width and height for png link", async () => {
    const { width, height } = await imageSize("/test/fixtures/128.png");
    expect(width).to.equal(128);
    expect(height).to.equal(128);
  });
});

function convertStringToBlob(byteCharacters: string): Blob {
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray]);
}
