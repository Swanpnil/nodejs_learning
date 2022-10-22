
let varialble_name = "";
let object_swapnil ={
    name: "swapnil Aade",
    age: 21,
    isMarried:"True",
    City: "Pune",
    address: {
        street: "Balaji Park",
        pin_code: 412207,
        city: "Mumbai",
        State: "Maharashtra"

    }
}
object_swapnil.pincode= 412207;
object_swapnil.eat= "";
console.log(this.name);
object_swapnil.person_profession= "Angular Developer";
console.log(object_swapnil);
object_swapnil.name;
console.log(object_swapnil["age"]);
delete object_swapnil.age;
let person_FullName = object_swapnil.name;
console.table(object_swapnil);                                                        
console.log(person_FullName);

