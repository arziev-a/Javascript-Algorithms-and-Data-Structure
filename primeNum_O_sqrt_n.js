// This is another example for the prime number but O(sqrt(n)) => it works faster than previous example because it only checks 
// whether number is divisible or not rather than iterating on every each number element (like a previous ex.)
// And there is formula for the prime num => (6k-+1) ex=======> 19 ==> (6*3) + 1 
const isPrime = (n) => {

  if(n <= 1) return false
  if(n <= 3) return true

  if (n % 2 == 0 || n % 3 == 0) {
    return false
  }

  for (let i = 5; i*i <=n; i +=6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false
    }

  }
  return true
}


console.log(isPrime(35)) //logs false