const http = require('http');
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; 
  }
  return n * factorial(n - 1); 
}
const number = 5; 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (number < 0) {
    res.end("Please enter a valid non-negative integer.");
  } else {
    // Respond with the factorial result
    const result = factorial(number);
    res.end(`Factorial of ${number} is ${result}`);
  }
});
server.listen(3080, () => {
  console.log("Server running at http://localhost:3080/");
});
