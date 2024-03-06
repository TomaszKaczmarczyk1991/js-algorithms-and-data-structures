// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow().
// Do not worry about negative bases and exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base,exp){
    if(exp === 0) return 1;
    return base * power(base, exp-1);
}

console.log(power(2,4));

// Initial call: power(2, 4)
// power(2, 4) calls power(2, 3)
// power(2, 3) calls power(2, 2)
// power(2, 2) calls power(2, 1)
// power(2, 1) calls power(2, 0)
// power(2, 0) returns 1 to the previous call (power(2, 1))
// power(2, 1) returns 2 to the previous call (power(2, 2))
// power(2, 2) returns 4 to the previous call (power(2, 3))
// power(2, 3) returns 8 to the previous call (power(2, 4))
// power(2, 4) returns 16 to the initial call