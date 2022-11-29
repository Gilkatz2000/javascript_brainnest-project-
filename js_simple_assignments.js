//Finding a diagonal of a square!
let squareSide = 9;
let squareDiagonal = Math.sqrt(2) * squareSide;

function square() {
    console.log(squareDiagonal);
}
square();

//Finding the area of a right angle triangle
let triangle_base = 5;
let triangle_height = 6;
let triangle_LongSide = 7;
let triangle_area = (triangle_base * triangle_height) / 2;

function triangle() {
    console.log(triangle_area);
}
triangle();

//Finding the circumference and surface are of a circle
let circle_radius = 4;
let circle_circumference = 2 * Math.PI * circle_radius;
let circle_area = Math.PI * circle_radius ** 2;

function circle_calculate() {
    console.log(circle_circumference);
    console.log(circle_area);
}
circle_calculate();


function intComparison(a,b) {
    if (a>b) {
        console.log(a + " is greater than " + b)
    } else {
        console.log(b + " is greater than " + a)
    }
}

function intEvenCheck(num) {
    if (num % 2 == 0) {
        console.log("The integer is an even number");
    } else {
        console.log("The integer is an odd number");
    }
}