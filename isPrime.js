// 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。

function isPrime(num){
    if( num ===1 ) return false;
    let startNum = 2;
    while(startNum < num){
        if(num % startNum === 0){
            return false
        }
        startNum++
    }
    return true;
}
console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(91))
console.log(isPrime(1000000))
// isPrime(1); // returns false
// isPrime(5); // returns true
// isPrime(91); // returns false
// isPrime(1000000); // returns false