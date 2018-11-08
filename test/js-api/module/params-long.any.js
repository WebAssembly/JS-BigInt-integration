// META: global=jsshell
// META: script=/wasm/jsapi/wasm-constants.js
// META: script=/wasm/jsapi/wasm-module-builder.js

test(() => {
  var builder = new WasmModuleBuilder();

  builder
      .addFunction("f", kSig_v_d) // f64 -> ()
      .addBody([])
      .exportFunc();

  var module = builder.instantiate();

  assert_throws(new TypeError(), () => module.exports.f(123n));
}, "passing BigInt where ToWebAssemblyValue don't expect it should throw");
