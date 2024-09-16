module.exports = function reverse (n) {
  let result = 0;
  n = Math.abs(n);

  while (n > 0) {
    const ones = n % 10;
    result = result * 10 + ones;
    n = Math.floor(n / 10);
  }

  return result;
}
