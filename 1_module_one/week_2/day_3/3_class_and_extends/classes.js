class User {
    constructor(n, l, a) {
        this.name = n;
        this.lastname = l;
        this.age = a;
    }

    presentYourself() {
        return `Hello, i'm ${this.name} ${this.lastname}, and i'm ${this.age}`;
    }

    greeting(user) {
        return `Hello ${user.name} ${user.lastname}`;
    }
}

class Player extends User {
    constructor(name, lastname, age, email) {
        super(name, lastname, age);
        this.score = 0;
    }

    incrementScore() {
        this.score += 1;
    }
}

function start() {
    const players = [];
    const u1 = new User("foo", "foofoo", 23);
    const u2 = new User("bar", "barista", 39);
    const u3 = new User("baz", "bazin", 55);
    
    // console.log(u1.presentYourself());
    // console.log(u2.greeting(u3));
    // console.log(u1, u2, u3);

    document.getElementById("form_create_user").onsubmit = function(evt) {
        evt.preventDefault(); // page won't refresh with this instruction !!!
        const form = evt.target || evt.srcElement;
        const name = form.elements[0]; // get the name out of the form
        const lastname = form.elements[1]; // get the lastname...
        const age = form.elements[2]; // get the age
        players.push(new Player(name.value, lastname.value, age.value)); // create a new User with these infos
        name.value = "";
        lastname.value = "";
        age.value = "";

        console.log(players[0].presentYourself());


        console.log(players); // see the users array grows ... ; )
    }
}

window.addEventListener("DOMContentLoaded", start);