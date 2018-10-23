// META: global=jsshell

test(() => {
  const argument = { "value": "i32" };
  const thisValues = [
    undefined,
    null,
    true,
    "",
    Symbol(),
    1,
    {},
    WebAssembly.Global,
    WebAssembly.Global.prototype,
  ];

  const fn = WebAssembly.Global.prototype.valueOf;

  for (const thisValue of thisValues) {
    assert_throws(new TypeError(), () => fn.call(thisValue), `this=${format_value(thisValue)}`);
  }
}, "Branding");

test(() => {
  const argument = { "value": "i32" };
  const global = new WebAssembly.Global(argument, 0);
  assert_equals(global.valueOf({}), 0);
}, "Stray argument");

test(() => {
  const argument = { "value": "i64" };
  const global = new WebAssembly.Global(argument, 123n);
  assert_equals(global.valueOf(), 123n);
}, "JavaScript BigInt are converted to WebAssembly longs as if by ToBigInt64");
