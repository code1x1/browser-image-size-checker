# @code1x1/browser-image-size-checker

Zero dependencies image size checker.

## Requires 

* URL.createObjectURL
* document.createElement
* Promise

## Usage

```js
const { width, height } = await imageSize(image);
const { width, height } = await imageSize(link);
```

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.35. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
