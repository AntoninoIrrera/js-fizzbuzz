


const ul = document.querySelector("ul");
    
    
for (let i = 1; i <= 100; i++){
    
    // const elemento = `<li> </li> `;
    // ul.innerHTML += elemento;

    // const li = document.querySelector("li");

    // let li = document.createElement("li")
    
    if((i % 3 == 0) && (i % 5 == 0)){
        
        const elemento = `<li class="mt-3"> FizzBuzz </li> `;
        ul.innerHTML += elemento;
        // ul.append(li, "FizzBuzz");
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        const elemento = `<li class="mt-3"> Fizz </li> `;
        ul.innerHTML += elemento;
        // ul.append(li, "Fizz");
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        const elemento = `<li class="mt-3"> Buzz </li> `;
        ul.innerHTML += elemento;
        // ul.append(li, "Buzz");
        console.log("Buzz");
    }
    else{
        const elemento = `<li class="mt-3"> ${i} </li> `;
        ul.innerHTML += elemento;
        // ul.append(li, i);
        console.log(i);
    }

} 
