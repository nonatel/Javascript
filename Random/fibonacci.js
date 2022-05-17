let n = prompt('Enter a number')
function fibonacci(num)
{
    let fib = [0,1];
    let sequence = [0,1];
    
    for(let i=2; i<=num; i++)
    {
        fib[i] = fib[i-1] + fib[i-2];
        sequence.push(fib[i]);
    }
    return sequence;
}

console.log(fibonacci(n))