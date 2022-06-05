var names = ["Angela", "Ben","Jenny","Michael","Chloe"];

function whosPaying(){

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is paying the bill!";
}