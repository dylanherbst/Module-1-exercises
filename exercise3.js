
function changeMe1(){
    document.getElementById("column1").style.backgroundColor = "green";
    let newText = document.getElementById('textfeild1').value;
    document.getElementById('heading1').textContent = newText;
}
function changeMe2(){
    document.getElementById("column2").style.backgroundColor = "green";
    let newText2 = document.getElementById('textfeild2').value;
    document.getElementById('heading2').textContent = newText2;
}

    function printWindow() {
        window.print();
    }
//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
//Write a JavaScript program to print the current window contents.

function calculateTriangleArea(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    return area;

}
let side1 = 5;
let side2 = 6;
let side3 = 7;
let triangleArea = calculateTriangleArea(side1, side2, side3);
console.log(triangleArea);


//Write a JavaScript program to get the website URL (loading page).
let currentURL = window.location.href;
console.log(currentURL);

//Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function calculate(num) {
    if (num <= 13) {
        return 13 - num ;
    } else {
        return (num -13) * 2;
    }
};
console.log(calculate(4));

//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
function sums(sum1, sum2) {
    if (sum2 === sum1) {
        return (sum1 + sum2) * 3 
    } else {
        return sum1 + sum2
    }
}
console.log(sums(2, 2))
function calculateResult() {
    // Get values from textboxes
    var sum1Input = document.getElementById('sum1').value;
    var sum2Input = document.getElementById('sum2').value;

    // Convert input values to numbers
    var sum1 = parseInt(sum1Input, 10);
    var sum2 = parseInt(sum2Input, 10);

    // Call the sums function and display the result
    var result = sums(sum1, sum2);
    document.getElementById('result').textContent = "Result: " + result;
}


