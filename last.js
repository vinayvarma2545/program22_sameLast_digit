const a = 55;
const b = 45;
const c = 35;

result1 = a%10;
result2 = b%10;
result3 = c%10;

if(result1==result2 && result1==result3){
    console.log(`last digits are same`)
}

else{
    console.log(`last digits are not same`)
}