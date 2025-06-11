function mul(a, b) {
  return a * b;
}

const double = mul.bind(null, 2);
console.log(double(3));
console.log(double(4));
