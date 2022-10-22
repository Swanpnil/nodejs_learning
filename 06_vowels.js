var getstring = "I love JavaScript";
var totalString = getstring.length;
for (let index = 0; index < totalString; index++) {
    var charat = getstring.charAt(index);
    console.log(charat);
    
}
console.log("==================================================");
var gethum = "I love Angular";
var totalhum = gethum.length;
for (let index = 0; index < totalhum; index++) {
    if (index%2==0) {
        var charatt = gethum.charAt(index);
        console.log(charatt);
    }   
    
}
console.log("======================log vowels============================");
var givenstring = "I love CodeMind";
strlowercase = givenstring.toLowerCase();
for (let index = 0; index < givenstring.length; index++) {
    var char = strlowercase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        console.log(char);
    }
}