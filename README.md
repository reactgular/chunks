[![Build Status](https://travis-ci.org/reactgular/chunks.svg?branch=master)](https://travis-ci.org/reactgular/chunks)
[![Coverage Status](https://coveralls.io/repos/github/reactgular/chunks/badge.svg?branch=master)](https://coveralls.io/github/reactgular/chunks?branch=master)
[![npm version](https://badge.fury.io/js/%40reactgular%2Fchunks.svg)](https://badge.fury.io/js/%40reactgular%2Fchunks)

## What is Chunks?

Chunks is a TypeScript library that creates an array of elements split into groups the length of size. If the array can't be split evenly, the
final chunk can be optionally padded with a default value. 

## Installation

To get started, install the package from npm.

```bash
npm install --save @reactgular/chunks
```

## Usage

Chunks is small, simple and easy to use.

```typescript
import {chunks} from '@reactgular/chunks';

console.log(chunks([1,2,3,4,5],2))
// => [[1,2],[3,4],[5]]

console.log(chunks([1,2,3,4,5],2,undefined))
// => [[1,2],[3,4],[5,undefined]]
```

# Getting help

You are welcome to open issues for general support questions as well as bug reports and feature requests.
