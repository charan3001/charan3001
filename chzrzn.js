[11:18 AM, 8/17/2024] +91 99857 04468: git clone <repo>
[11:29 AM, 8/17/2024] +91 99857 04468: const args = process.argv.slice(2);
const numbers = args.map(arg => parseFloat(arg)).filter(num => !isNaN(num));
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);
