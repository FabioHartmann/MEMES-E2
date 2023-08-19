const res = process.argv[2].split('').map((x, i, arr) => Math.pow(26, arr.length - i - 1) * (x.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1)).reduce((a, b) => a + b, 0);
console.log(res > 16384 ? 'Essa coluna nao existe Tobias!' : String(res));
