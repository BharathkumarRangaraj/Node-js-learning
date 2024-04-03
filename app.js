setTimeout(() => console.log("1"), 0);
setTimeout(
  () => console.log("2"),
  Promise.resolve().then(() => console.log("promse one nsde settmeout")),
  process.nextTick(() => console.log(" settmeout nner next tck")),
  0
);
setTimeout(() => console.log("3"), 0);

process.nextTick(() => console.log("first next tck"));
process.nextTick(() => console.log("2 next tck"));
process.nextTick(
  () => console.log("3 next tck"),
  process.nextTick(() => console.log(" nner next tck")),
  process.nextTick(() => console.log(" nner next tck"))
);
process.nextTick(() => console.log("4 next tck"));

Promise.resolve().then(() => console.log("promse one"));
Promise.resolve().then(
  () => console.log("promse 2"),
  process.nextTick(() => console.log(" prmse nner next tck")),
  process.nextTick(() => console.log(" prmse nner next tck 2"))
);

Promise.resolve().then(() => console.log("promse 3"));
