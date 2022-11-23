
const bottone = document.querySelector("a.btn-danger");
const ul = document.querySelector("ul");


bottone.addEventListener("click", function(){
    for (let i = 1; i <= 100; i++) {
        
        if ((i % 3 == 0) && (i % 5 == 0)) {
            const elemento = `<li class="mt-3 rosso"> FizzBuzz </li> `;
            ul.innerHTML += elemento;
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            const elemento = `<li class="mt-3 magenta"> Fizz </li> `;
            ul.innerHTML += elemento;
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            const elemento = `<li class="mt-3 blu"> Buzz </li> `;
            ul.innerHTML += elemento;
            console.log("Buzz");
        }       else {
            const elemento = `<li class="mt-3 verde"> ${i} </li> `;
            ul.innerHTML += elemento;
            console.log(i);
        }
    } 
})
   
// -----------------------------


// metodo con funzione append
// const bottone = document.querySelector("a.btn-danger");
// const p = document.querySelector("p");


// bottone.addEventListener("click", function () {
//     for (let i = 1; i <= 100; i++) {
       
//         let br = document.createElement("br")
//         if ((i % 3 == 0) && (i % 5 == 0)) {
            
//             p.append(br, "FizzBuzz");
//             console.log("FizzBuzz");
//         }
//         else if (i % 3 == 0) {
            
//             p.append(br, "Fizz");
//             console.log("Fizz");
//         }
//         else if (i % 5 == 0) {
            
//             p.append(br, "Buzz");
//             console.log("Buzz");
//         }
//         else {
       
//             p.append(br, i);
//             console.log(i);
//         }
//     }
// })