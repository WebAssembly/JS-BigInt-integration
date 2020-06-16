# WebAssembly BigInt<->i64 conversion in JS API

**This proposal has been merged into the [main specification](https://webassembly.github.io/spec/js-api/).**

With the changes in this repository, BigInts have support for bidirectionally converting
to 64-bit integer WebAssembly values, which appears as
- Parameters and return values to exported WebAssembly functions
- Parameters and return values to host functions
- Imported and exported globals

BigInts can be read or written from WebAssembly memory using the
BigInt proposal's BigInt64Array or BigUint64Array; no additional
support is needed.
    
[Design issue](https://github.com/WebAssembly/proposals/issues/7)

[Rendered spec](https://webassembly.github.io/JS-BigInt-integration)
