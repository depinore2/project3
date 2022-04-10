export class Student {
    constructor(id, gpa) {
        this.id = id;
        this.gpa = gpa;
    }
    getSummary() {
        return `${this.id} has GPA ${this.gpa}.`
    }
}

export class Classroom {
    students = [];
    constructor(id) {
        this.id = id;
    }
    addStudent(student) {
        const preExistingStudent = this.getStudent(student.id);
        if(preExistingStudent) {
            console.log(`Student with id ${student.id} already exists.`);
        }
        else {
            this.students.push(student);
        }
    }
    getStudent(id) {
        for(let student of this.students) {
            if(student.id === id) {
                return student;
            }
        }
    }
    removeStudent(id) {
        for(let i = 0; i < this.students.length; i++) {
            if(this.students[i].id === id) {
                this.students.splice(i, 1);
                break;
            }
        }
    }
    getSummary() {
        if(this.students.length) {
            let totalGpa = 0;
            for(let student of this.students) {
                totalGpa += student.gpa;
            }

            return `${this.id} has ${this.students.length} students with average GPA ${totalGpa / this.students.length}.`
        }
        else {
            return `${this.id} has no students.`
        }
    }
}
export class ClassroomManager {
    classrooms = [];
    addClassroom(id) {
        let available = this.getClassroom(id) === undefined;

        if(!available) {
            console.log('That classroom already exists.');
        }
        else {
            this.classrooms.push(new Classroom(id));
        }
    }
    getClassroom(id) {
        for(let classroom of this.classrooms) {
            if(classroom.id === id) {
                return classroom;
            }
        }
    }
    removeClassroom(id) {
        for(let i = 0; i < this.classrooms.length; i++) {
            if(this.classrooms[i].id === id) {
                this.classrooms.splice(i, 1);
                break;
            }
        }
        console.log(`Classroom ${id} has been deleted.`)
    }
}