var output = [];
var count = 1;

function fizzbizz(){

if(count % 3===0 && count % 5===0){
  output.push("FizzBuzz");
} 
else if(count % 3 === 0) {
  output.push ("fizz");
} 
else if(count % 5 === 0) {
  output.push ("Buzz");
} 
else{
  output.push(count);
}
count++;

console.log(output);
}

fizzbizz();
