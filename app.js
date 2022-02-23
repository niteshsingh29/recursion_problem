console.log("Catalan number");
var x = 0;
var y = 0;
// formula of catalan number is C(i) * C(n-i-1) //
n = Number(prompt("enter number:", ""));
function catalon(n) {
  //console.log(x++);
  if (n <= 1) {
    return 1;
  }
  let cat = 0;
  for (let i = 0; i < n; i++) {
    cat += catalon(i) * catalon(n - i - 1);
    console.log(y++)
  }
  return cat;
}
for (let k = 0; k < n; k++) {
  document.write(catalon(k) + " ");
}
