
function vehicle(vName , vColor , vCity , Price){
    this.vehicle_name = vName,
    this.color = vColor,
    this.vehicle_passing = vCity,
    this.vehicle_price = Price
}
console.log("=======================Vehicle_Details==========================");
console.error("=============Swift==================")
let car = new vehicle("Maruti_suzuki_Swift" , "red" , "mumbai" , "7.5Lakhs");
console.log(car);
console.error("=============Creta==================")
let car2 = new vehicle("Hyundai_Creta" , "White" , "Gujrat" , "17.5Lakhs");
console.log(car2);
console.error("=============Scorpio==================")
let car3 = new vehicle("Mahindra_scorpio" , "Grey" , "Ladakh" , "19.0Lakhs");
console.log(car3);
console.error("=============limousine==================")
let car4 = new vehicle("Mercedes_limousine" , "Silver" , "Delhi" , "75.7Lakhs");
console.log(car4);
console.error("=============Sports==================")
let car5 = new vehicle("Range_Rover_sports" , "Orange" , "Pune" , "2.5Crore");
console.log(car5);
function college(cNAme , cCity , Faculties , Annual_Fees){
    this.college_name = cNAme,
    this.College_adderss = cCity,
    this.Cources = Faculties,
    this.Course_annual_fees = Annual_Fees
}
console.log("========================Class_for_College=============================");
console.error("============Engineering=====================");
let class0 = new college("G.H.Rhisoni_college" , "Pune" , "Engineering" , "4.2Lakhs");
console.log(class0);
console.error("============Management=====================");
let class1 = new college("JSPM college" , "Nagar" , "BCA" , "1.2Lakhs");
console.log(class1);
console.error("============Medical=====================");
let class2 = new college("Symboisis" , "Mumbai" , "MBBS" , "12.2Lakhs");
console.log(class2);
console.error("============Development=====================");
let class3 = new college("DY_Patil_College" , "Delhi" , "adv_Java" , "4.2Lakhs");
console.log(class3);
console.log("========================For_in_Loop=============================");
const traverse_object ={
    collegeName : "G.H.Rhisoni college",
    collgerAdderss : "Pune",
    collegeFaculties : "Engineering",
    annualFees : "4.2Lakhs"
}
for (const key in traverse_object) {
    
        const element = traverse_object[key];
        console.log(`${key}: ${element}`);
    }
    
