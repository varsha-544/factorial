const http = require('http');
 {
    if (num < 0) return 'Factorial not defined for negative numbers';
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
const num = 5; 
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const result = calculateFactorial(num);
    res.end(The factorial of ${num} is ${result});
});
server.listen(3020, () => {
    console.log('Server is running on port 3020...');
    console.log(The factorial of ${num} is ${calculateFactorial(num)});
});