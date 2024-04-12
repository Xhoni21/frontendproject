const form=document.getElementById("cont")

form.addEventListener("submit",e => {
    e.preventDefault();


let Name = document.getElementById("Name").value;
let Email = document.getElementById("Email").value;
let Number = document.getElementById("Number").value;

console.log(`Client : ${Name}`);
console.log(`Email : ${Email}`);
console.log(`Phone Number : ${Number}`);

let btn = document.getElementById(`btn`);
btn.onclick = function(){
    alert("Thanks for choosing us!");
}

});