# Using Chalk v0.0.1

Chalk is a structured mathematical visual language. In v0.0.1 the public package contract is intentionally small: define a Chalk JSON document, parse/validate it, then hand the resulting semantic document to a renderer or adapter.

## Requirements

- Node.js 20+
- npm, pnpm, or another compatible package manager
- A TypeScript/JavaScript application

## Install from source

Until a registry package is published, install directly from the tagged GitHub source:

```bash
npm install github:TheGrahamFoundation/Chalk#v0.0.1
```

For development:

```bash
git clone https://github.com/TheGrahamFoundation/Chalk.git
cd Chalk
npm install
npm run build
```

## Smallest useful example

```ts
import { parseChalkSpec } from "@thegrahamfoundation/chalk";

const spec = parseChalkSpec({
  version: "0.0.1",
  viewport: [-2, 2, 2, -2],
  showAxis: true,
  elements: [
    { type: "circle", center: [0, 0], radius: 1 },
    { type: "point", coords: [0.866, 0.5], label: "P(30°)" },
    { type: "segment", from: [0, 0], to: [0.866, 0.5], label: "r=1" }
  ]
});

console.log(spec);
```

The parser rejects malformed documents rather than silently changing their mathematical meaning.

## Document shape

Every Chalk document has a `version`, a viewport, an axis preference, and an array of semantic elements. v0.0.1 includes points, segments, lines, circles, polygons, angles, function graphs, text, and arcs.

Chalk itself is the semantic contract. Rendering is deliberately downstream. The reference direction is JSXGraph, but a conforming renderer can target another deterministic graphics engine.

## Typical flow

```text
author / machine
      ↓
 Chalk JSON
      ↓
parseChalkSpec()
      ↓
validated semantic document
      ↓
renderer / adapter
      ↓
interactive or static mathematical visual
```

## v0.0.1 scope

This release establishes the initial TypeScript types and parser boundary. Renderer-independent conformance, JSON Schema, accessibility descriptions, animation, SVG export, and a stable renderer API remain future work.

Because the format is experimental, do not treat v0.0.1 documents as permanently backwards-compatible.

## License

MIT. Third-party rendering engines retain their own licenses.
