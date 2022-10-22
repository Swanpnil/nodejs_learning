
let teacher = "";
let tDetails = {
    teacher_name: "Swapnil Aade",
    age: 21,
    mobile_no: 9373477646,
    Address: {
        Street: "Balaji Park",
        Villege: "Wagholi",
        City: "Pune",
        pin_code: 412207
    }
}
console.error("============Add and Modified function================");
console.log(tDetails);
let Education = "";
let tEducation = {
    Degrees: {
        enginiring : "csc",
        PHD : "Adv computing",
        Computer_applications :"BCA"
    }
}
tEducation.Degrees.Software_enginiring ="BSC(Computer Science)"
tEducation.Degrees.enginiring ="computer_enginiring"
console.table(tEducation);

console.error("===========Add function================");
let certificates = "";
let tcertificates = {
        First_Certificate: "Hacker rank certification",
        Second_Certificate: "Certificate in IFE course",
        Third_Certificate: "Certificate in adv programming"
    }
tcertificates.Fourth_Certificate = "Google cloud Certification"
console.table(tcertificates);
console.error("===========Delete function================");
let certificates2 = "";
let tcertificates2 = {
        First_Certificate: "Hacker rank certification",
        Second_Certificate: "Certificate in IFE course",
        Third_Certificate: "Certificate in adv programming"
    }
delete tcertificates.First_Certificate;
console.table(tcertificates);






