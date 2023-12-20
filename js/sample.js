class Course {
  constructor(name, id) {
    this.id = id;
    this.name = name;


  }
}

class Student {
  stdList = [];
  courses = [];
  constructor(name, id) {
    this.id = id;
    this.name = name;


  }


  //Fucntion to add new student
     addNewStd(){
    const studentNameInput = document.getElementById("studentName");
    const studentIDInput = document.getElementById("studentID");
    const studentName = studentNameInput.value;
    const studentID = parseInt(studentIDInput.value);


    const newStudent = {
      studentName: studentName,
      studentID: studentID
    };

    this.stdList.push(newStudent);
    return this.stdList;
   

  
  }
  //Fucntion to delete student
  deletStd(name, id) {


    const index = this.stdList.findIndex(student => student.name === name && student.id === id)



    this.stdList.splice(index, 1);


    return this.stdList;
  }

  //Function to assign course to student
  assignCourseToStudent(student, newCourse) {


    student.courses.push(newCourse)
    document.write(` <br> <h1> ${newCourse.name} has been assigned to ${student.name} </h1>`)

  }
  //Function to unassign course to student
  unAssignCourseFromStudent(courseName) {

    var index = this.courses.findIndex(course => course.name === courseName)

    this.courses.splice(index, 1);
    document.write(`<br> <h1>${courseName.name} has been unassigned from ${this.name}</h1>`);

  }
}



let std1 = new Student("Mark", 2);

document.write("Records before updation: " + std1.name + " and " + std1.id + "<br>");
let updatedList = std1.addNewStd();

document.write("Records added after updation: " + updatedList[0]["name"] + " and " + updatedList[0]["id"] + "<br>");

let deletedItems = std1.deletStd("Glen", 90);
document.write("Records after deletion: " + deletedItems.map(student => student.name + " and " + student.id).join(","));

let course1 = new Course("Urdu", 1)

std1.assignCourseToStudent(std1, course1)

std1.unAssignCourseFromStudent(course1)
