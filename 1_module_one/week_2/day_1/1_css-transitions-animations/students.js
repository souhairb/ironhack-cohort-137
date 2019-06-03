console.log("Ready to rock !!!");

function getTitleMainInfos() {
    const titleMain = document.getElementById("title_main");
    // titleMain contains an object representing a html tag
    console.log("title => ", titleMain, typeof titleMain);
    // you can access it's properties ...
    // some are read-only, some are editable
    console.log(titleMain.id); // id is editable
    titleMain.id = "foo"; // we replaced the previous id with "foo"
}

function parseStudents() {
    const students = document.getElementById("students");

    // modify your html
    // add an id on div.boxes
    // get it in your js start function
    // print it in the console
    console.log(students);
    // once done, print the count of child elements inside students

    console.log(students.children); // students.children returns a HTMLCollection
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

    console.log(`this div contains ${students.children.length} child tags !`);
    // use a for loop to display each child of div#students

    for (let i = 0; i < students.children.length; i++) {
        console.log(students.children[i]); // print each element (an object)
        console.log(students.children[i].id); // print each element's id
        // students.children[i].style.background = "orange";
        students.children[i].style.background = (i % 2 === 0) ? "orange" : "firebrick";
    }

    console.log("-------- same thing with forEach ----------");

    Array.from(students.children).forEach(student => {
        console.log(student.id);
    });

}

function useQuerySelector() {
    
}

function useQuerySelectorAll() {
    
}

function start() {
    // this function will be executed on DOMContentLoaded ...
    getTitleMainInfos();
    parseStudents();
}




window.addEventListener("DOMContentLoaded", start);
