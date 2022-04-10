/*
Objective:

    Write a program that lets you manage relationships between students and classrooms.
    Each student has a unique label--which is a string--and a gpa.  The label can be their name, for example.  The label will never have a space in it.

    Students are contained within a Classroom object.  Classrooms have a unique string label, and have capabilities that allow you to get/add/remove students to the classroom.  The classroom's label will never have a space in it.
    
    Your program should allow you to print out a summary of an entire classroom with the student count and average GPA.
    Your program should also allow the user to get a summary of an individual student.

    Your program should be built in the form of a REPL, where it takes no command-line arguments and instead should be interactive.

    To add a classroom:
        new classroom <classroom id>

    To print a classroom summary:
        get classroom <classroom id>

    To delete a classroom
        delete classroom <classroom id>

    ---

    To add a student:
        new student <classroom id> <student id> <gpa>

    To print a student summary:
        get student <classroom id> <student id>

    To delete a student:
        delete student <classroom id> <student id>

    ---

    To close the program the user can type "quit" and hit enter.

Example session:
    $ node index.js

    > get classroom 1234
    Classroom 1234 does not exist.

    > new classroom 1234
    Classroom 1234 added.

    > get student 1234 4321
    Student 4321 does not exist in classroom 1234.

    > new student 1234 liz 3.8
    liz with GPA 3.8 was added to classroom 1234.

    > new student 1234 edgar 3.5
    edgar with GPA 3.5 was added to classroom 1234.

    > get student 1234 liz 3.8
    liz is in classroom 1234 and has GPA 3.8.

    > get classroom 1234
    Classroom 1234 has 2 students with an average GPA of 3.65.

    > delete classroom 123
    Classroom 123 does not exist.

    > delete classroom 1234
    Classroom 1234 has been deleted.

    > delete student 1234 liz
    Student liz does not exist in classroom 1234.

    > quit
    $

Tips:
    To read user input, you can use an npm package called prompt-sync.  This is a third-party package from the internet.
    To install the module, cd into the src folder and then run this command:
        npm i prompt-sync --save
    From there, you can import the module and use it.  I've provided starter code for you to do that below.
    For usage examples, go to the prompt-sync documentation page: https://www.npmjs.com/package/prompt-sync#basic-mode

    prompt-sync will return a string with all of your arguments.  To break it up into an array with segments like process.argv, use the .split(' ') method.

    Example:
        const userInput = prompt('>')
        const arguments = userInput.split(' ') // this will turn a single string into an array of strings, splitting the string up every time it finds a ' '.

        // from here, you can do whatever you want with the arguments array, and treat it like you would process.argv.

    To force a node program to exit, you can use 
*/

import { default as promptSync } from 'prompt-sync'
const prompt = promptSync();

const exitKeyword = 'quit';

while(true) {
    const userInput = prompt('> ');
    console.log(`You provided ${userInput}`);

    if(userInput === exitKeyword) {
        process.exit(0);
    }
    else {
        // rest of program goes here.
        const myArguments = userInput.split()
    }
}