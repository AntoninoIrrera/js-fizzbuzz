
const bottone = document.querySelector("a.btn-danger");
const ul = document.querySelector("ul");

bottone.addEventListener("click", function(){
    for (let i = 1; i <= 100; i++) {
        // const elemento = `<li> </li> `;
        // ul.innerHTML += elemento;
        // const li = document.querySelector("li");
        // let li = document.createElement("li")
        if ((i % 3 == 0) && (i % 5 == 0)) {
            const elemento = `<li class="mt-3 rosso"> FizzBuzz </li> `;
            ul.innerHTML += elemento;
            // ul.append(li, "FizzBuzz");
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            const elemento = `<li class="mt-3 magenta"> Fizz </li> `;
            ul.innerHTML += elemento;
            // ul.append(li, "Fizz");
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            const elemento = `<li class="mt-3 blu"> Buzz </li> `;
            ul.innerHTML += elemento;
            // ul.append(li, "Buzz");
            console.log("Buzz");
        }
        else {
            const elemento = `<li class="mt-3 verde"> ${i} </li> `;
            ul.innerHTML += elemento;
            // ul.append(li, i);
            console.log(i);
        }
    } 
})

