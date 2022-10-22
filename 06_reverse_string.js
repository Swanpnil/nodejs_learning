var mystring = "Swapnil";
var varstring = mystring.length -1 ;
var reversestring = "";
for (let index = varstring; index >=0; index++) {
    console.log(mystring.charAt(index));
    reversestring = reversestring + mystring.charAt(index)
}
console.log(reversestring);