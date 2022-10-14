
console.log("=========Step.1==========");
function maleMarriageEligibility(gender , age , boyName){
var result = gender == "Male" && age>=21
? `Hey ${boyName} you are elligible for marriage`
: `Hey ${boyName} you are not elligible for marriage`
console.log(result);

}
maleMarriageEligibility("Male" , 25 , "BillGates")
maleMarriageEligibility("Male" , 17 , "Stew Jobs")
console.log("=========Step.2==========");
function femaleMarriageEligiblity(age , gender , girlName) {
    if (age == 18 , gender=="Female") {
        console.log(`Hey ${girlName} you are elligible for marrage`);
        
    }else{
        console.log(`Hey ${girlName} you are not elligible for marrage`);
    }
    
}
femaleMarriageEligiblity("Female" , 17 , "Jenifer")
femaleMarriageEligiblity("Female" , 28 , "Melinda Gates")