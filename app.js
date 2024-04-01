function greet(name) {
  console.log(`hello ${name}`);
}

function hocgreetfn(hocgreet) {
  const name = "bharath";
  hocgreet(name);
}

hocgreetfn(greet);
