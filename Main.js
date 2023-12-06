function helloWorld(){
    alert('Hello World!')
}
let i = true;
function doChange() {
    if (i){
    document.getElementById("pageHeading").style.color = "green";
    document.getElementById("header").innerText = 'Hello Javascript';
    document.getElementById("aside").style.backgroundColor = 'green';
    i = false;
    } else {
        document.getElementById("pageHeading").style.color = "green";
    document.getElementById("header").innerText = 'hello JS in red';
    document.getElementById("aside").style.backgroundColor = 'red';    
    i = true;
    }

    let b = document.getElementById("body");
    let p = document.createElement("p");
    p.innerText = "this is the new paragraph";
    b.appendChild(p)}

    //let i = true;
function helloWorld(){
    if (i) {
        document.getElementById("header").innerText = 'Hello JavaScript';
        document.getElementById("aside").style.backgroundColor = 'green';
        i=false
    } else {
        document.getElementById("header").innerText = 'Header';
        document.getElementById("aside").style.backgroundColor = 'white';
        i=true
    }

let b = document.getElementById("body");
let p = document.createElement("p");
p.innerText = "This is the brand spanking new paragraph";
b.appendChild(p);
}//