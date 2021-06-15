# @avidianity/extras

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Extra features on native objects

## Installation

npm:

```bash
npm install @avidian/extras
```

yarn:

```bash
yarn add @avidian/extras
```

## Usage

### Arrays

```javascript
const data = [1, 2, 3];

const randomValue = data.random();

const first = data.first();

const last = data.last();

// Flatten
const data = [1, 2, 3, [4, 5]];

// [1, 2, 3, 4, 5]
const flattened = data.flatten()

```
