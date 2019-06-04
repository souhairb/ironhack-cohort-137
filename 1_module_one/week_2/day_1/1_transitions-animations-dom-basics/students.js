console.log("Ready to rock !!!");

// document selection functions
// document.getElementById("the_id_you_want_to_select")
// document.getElementsByTagName("the_target_tag_name")
// document.getElementsByClassName("the_target_css_class")
// document.querySelector("a .valid-selector")
// document.querySelectorAll("a .valid-selector")

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

    console.log(students.children);
    // students.children returns a HTMLCollection
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

    console.log(`this div contains ${students.children.length} child tags !`);

    // use a for loop to display each child of div#students
    for (let i = 0; i < students.children.length; i++) {
        console.log(students.children[i]); // print each element (an object)
        console.log(students.children[i].id); // print each element's id
        // students.children[i].style.background = "orange";
        students.children[i].style.background = (i % 2 === 0) ? "orange" : "firebrick";
    }

    // console.log("-------- same thing with forEach ----------");

    // Array.from(students.children).forEach(student => {
    //     console.log(student.id);
    // });

}

function useGetElementsByTagName(tag) {
    const divCollection = document.getElementsByTagName(tag || "div");
    return divCollection; // returns HTMLCollection of matching tags
    // HTMLCollections are "array-like" data structures
}

function useGetElementsByClassName(cssClass) {
    const studentCollection = document.getElementsByClassName(cssClass ||"student");
    return studentCollection; // returns HTMLCollection of matching CSS class
    // note : a HTMLCollection is "live" data structure : updated automatically when the document changes
}

function useQuerySelector(cssSelector) {
    const element = document.querySelector(cssSelector);
    return element; // returns the first matching element
}

function useQuerySelectorAll(cssSelector) {
    const list = document.querySelectorAll(cssSelector);
    return list; // returns a list of matching elements
}

function modifyElements(list) {
    list.forEach(student => {
        student.innerHTML += " <br>is odd in the list";
        // let's add some html to the existing content :)
        // innerHTML add some html INSIDE the target element
    });
}

function addStudents(list) {
    const parent = document.getElementById("students");
    list.forEach(student => {
        const studentTag = document.createElement("div");
        studentTag.innerHTML = `${student.name} - ${student.age}`;
        studentTag.className = "box student";
        studentTag.id = "student_" + parent.children.length + 1;
        // add student_n id for all of theses tags ... ???
        console.log(studentTag); // DOM object for each student literal !!!
        parent.appendChild(studentTag);
    });
}

function simpleCallBack(evt) { // implicit argument

    console.log(evt.target); // represents the element that triggered the click event

    // 1 - get the source of the click event
    // 2 - check the presence of a "is-active" css class :
    //  if NOT present => add the class "is-active" 
    //  else  => remove the class "is-active" 

    evt.target.classList.toggle("is-active"); // works as the if/else statement below
    
    if (evt.target.classList.contains("is-active")) evt.target.style.fontSize = "20px";
    else evt.target.style.fontSize = "16px";
}

function listenToClicks() {
    // 1 => list all students with document.???
    const students = document.querySelectorAll(".student");
    // 2 => loop through each element
    for (let i = 0; i < students.length; i++) {
        // 3 => listen to click event on each parsed element
        // 4 => associate a callback function as event-handler !
        students[i].onclick = simpleCallBack;
    }
}

function start() {
    // this function will be executed on DOMContentLoaded ...
    const btn = document.getElementById("add_students");

    getTitleMainInfos();
    // parseStudents();
    
    console.log(useGetElementsByTagName("meta"));
    console.log(useGetElementsByClassName("box"));
    console.log(useQuerySelector("head"));
    console.log(useQuerySelector("body"));
    console.log(useQuerySelector("#students"));
    console.log(useQuerySelector("#students > *"));

    const oddStudents = useQuerySelectorAll("#students .student:nth-child(odd)")
    // console.log(oddStudents);

    modifyElements(oddStudents); // let's add some html content to these odd elements !
    
    // btn.onclick = simpleCallBack; // event listener = event handler 
    // btn.addEventListener("click", simpleCallBack); // synonym for above instruction !!!
    
    listenToClicks(); // listen to click on each student elements
    
    btn.onclick = function() {
        addStudents([{name: "foo", age: 19}, {name: "bar", age: 27}, {name: "baz", age: 41}]);
        listenToClicks(); // listen to click on each student elements, including the newly added ones
        // parseStudents();
    }
}
window.addEventListener("DOMContentLoaded", start);












// function useQuerySelectorAll() {
    
// }





