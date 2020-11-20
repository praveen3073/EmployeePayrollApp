window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            nameError.textContent = "";
        } catch (e) {
            nameError.textContent = e;
        }
    }); 

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}); 

class EmployeePayrollData{
    // getters and setters
    get id() {return this._id;}
    set id(id){
        this._id=id;
    }
    get name(){ return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(name)) this._name = name;
        else throw "Name is Incorrect!";
    }

    get profilePic() {return this._profilePic;}
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender() {return this._gender;}
    set gender(gender){
        this._gender = gender;
    }

    get department() {return this._department;}
    set department(department){
        this._department = department;
    }

    get salary() {return this._salary;}
    set salary(salary){
        this._salary = salary;
    }

    get startDate() {return this._startDate;}
    set startDate(startDate){
        let newDate = new Date(startDate[2],startDate[1],startDate[0]);
        if(newDate <= new Date()) this._startDate = newDate;
        else throw 'Start Date is incorrect';
    }

    get notes() {return this._notes}
    set notes(notes){
        this._notes = notes;
    }

    //toString method
    toString(){
        return "id="+this.id+" : name="+this.name+
                " : gender="+this.gender+" : Dept="+this.department+
                " : salary="+this.salary+" : Start Date="+this.startDate
                +" : Notes="+this.notes;
    }
}

let employees=new Array();
const save = () => {
    try {
        let employeePayroll = new EmployeePayrollData();
        employeePayroll.name = document.getElementById('name').value;
        employeePayroll.profilePic = getRadioValue(document.getElementsByName('profile'));
        employeePayroll.gender = getRadioValue(document.getElementsByName('gender'));
        employeePayroll.department = getCheckBoxValue(document.getElementsByClassName('checkbox'));
        employeePayroll.salary = document.getElementById('salary').value;

        let start = new Array();
        start.push(document.getElementById('day').value);
        start.push(document.getElementById('month').value);
        start.push(document.getElementById('year').value);
        employeePayroll.startDate = start;

        employeePayroll.notes = document.getElementById('notes').value;
        console.log(employeePayroll);
        alert(employeePayroll);
    }
    catch (exception) {
        console.error(exception); alert(exception);
    }
    employees.push(employeePayroll);
}

function getRadioValue(radios) {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}
function getCheckBoxValue(boxes) {
    let boxlist = []
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            boxlist.push(boxes[i].value)
        }
    }
    return boxlist;
}