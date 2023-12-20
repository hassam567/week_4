class Course {
    constructor(name, id) {
      this.id = id;
      this.name = name;
    

    }
  }
  
  class Student extends Course {
    stdList = [];
    courses=[];


    addNewStd(name, id) {
      const newStudent = {
        name: name,
        id: id
      };
  
      this.stdList.push(newStudent);
      return this.stdList;
    }
  
    deletStd(name, id) {
     
    
      const index=this.stdList.findIndex(student=> student.name===name&&student.id===id)
  
     
    
        this.stdList.splice(index, 1);
      
  
      return this.stdList;
    }


    assignCourseToStudent(student,newCourse)
    {
     

        student.courses.push(newCourse)
        document.write(` <br> <h1> ${newCourse} has been assigned to ${student.name} </h1>`)
       
    }

    unAssignCourseFromStudent(courseName)
    {

      var index=this.courses.findIndex(course=>course.name===courseName)

      this.courses.splice(index,1);
      document.write(`<br> <h1>${courseName} has been unassigned from ${this.name}</h1>`);

    }
  }
  
  let std1 = new Student("Mark", 2);
  document.write("Records before updation: " + std1.name + " and " + std1.id + "<br>");
  
  let updatedList = std1.addNewStd("Bob", 6);
  document.write("Records after updation: " + updatedList[0]["name"] + " and " + updatedList[0]["id"] + "<br>");
  
  let updatedList1 = std1.addNewStd("Maxwell", 9);
  document.write("Records after updation: " + updatedList1[1]["name"] + " and " + updatedList1[1]["id"] + "<br>");
  
  let updatedList2 = std1.addNewStd("Glen", 90);
  document.write("Records after updation: " + updatedList2[2]["name"] + " and " + updatedList2[2]["id"] + "<br>");
  
  let deletedItems = std1.deletStd("Glen", 90);
  document.write("Records after deletion: " + deletedItems.map(student => student.name + " and " + student.id).join(","));


  std1.assignCourseToStudent(std1,"Urdu")

  std1.unAssignCourseFromStudent("Urdu")
  