/** This function takes a file via link or blob and returns width and height. */
export function imageSize(
  image: File | Blob | string
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const url = typeof image === "string" ? image : URL.createObjectURL(image);
    if (!url) {
      throw new Error("image must be valid type");
    }

    const img = document.createElement("img");

    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.onerror = reject;

    img.src = url;
  });
}
