"use strict";
// creating interface
exports.__esModule = true;
exports.std1 = void 0;
// using Employee type
var e1 = {
    eId: 909,
    eName: "Chaitanya"
};
// using skill type
var skill1 = {
    skill_name: "python",
    skill_desc: "developer"
};
var StreetRoll = /** @class */ (function () {
    function StreetRoll(rollno, addresses, skills) {
        this.rollno = rollno;
        this.addresses = addresses;
        this.skills = skills;
    }
    StreetRoll.prototype.getRollnumber = function () {
        console.log("Roll number of the student is: ", this.rollno);
        console.log("Street of the roll number is: ", this.addresses.temp_address.street);
    };
    return StreetRoll;
}());
var std2 = new StreetRoll(909, {
    perm_addresses: { city: "SKLM", pincode: 532402 },
    temp_address: { hn0: 231, street: "Main" }
}, [skill1]);
console.log(std2.getRollnumber());
// using student type
exports.std1 = {
    rollno: 909,
    addresses: {
        perm_address: {
            city: "sklm",
            pincode: 5324
        },
        temp_address: {
            hno: 121,
            street: "Main"
        }
    },
    skills: [skill1]
};
var empSkl = /** @class */ (function () {
    function empSkl(eId, eName, skill_desc, skill_name) {
        this.eId = eId;
        this.eName = eName;
        this.skill_name = skill_name;
        this.skill_desc = skill_desc;
    }
    return empSkl;
}());
// export default std1;
