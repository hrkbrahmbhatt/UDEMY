function a() {
  return Promise.resolve("a");
}

function b() {
  return Promise.resolve("b");
}

async function c() {
  return "c";
}

console.log(a()); //output: Promise{'a'}
console.log(b());
console.log(c()); //output: Promise {'c'}
