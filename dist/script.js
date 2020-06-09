"use strict";
var Positions;
(function (Positions) {
    Positions["boss"] = "Vasia";
    Positions["hrManager"] = "Zina";
    Positions["sales"] = "Akakiy";
})(Positions || (Positions = {}));
var User = (function () {
    function User(schoolName, position, salary) {
        this.schoolName = schoolName;
        this.position = position;
        this.salary = salary;
    }
    User.prototype.getPosAndSalary = function () {
        return {
            position: this.position,
            salary: this.salary
        };
    };
    User.prototype.getSchoolName = function () {
        return this.schoolName;
    };
    return User;
}());
var vasia = new User('Hillel', 'director', 100000);
console.log(vasia);
console.log(vasia.getPosAndSalary());
console.log(vasia.getSchoolName());
