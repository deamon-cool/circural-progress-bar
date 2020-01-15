var counter = document.getElementById('counter').getContext('2d');
var no = 0; // starting point
var pointToFill = 4.72; // point from where you want to fill the circle
var cw = counter.canvas.width; // return canvas width
var ch = counter.canvas.height; // return canvas height
var diff; // find the different between current number (no) and targeted value (100)

function fillCounter(){
    diff = ((no/100) * Math.PI * 2 * 10);

    counter.clearRect(0,0,cw,ch); // clear canvas evry time when function is call

    counter.lineWidth = 15; // size of stroke

    counter.fillStyle = '#fff'; // color that you want to fill in counter/circle

    counter.strokeStyle = '#f5e0a9'; // stroke color

    counter.textAlign = 'center';

    counter.font = "25px monospace"; // set font size and face

    counter.fillText(no,100,110); // fill text (text,x,y)

    counter.beginPath();
    counter.arc(100,100,90,pointToFill,diff/10+pointToFill); // arc(x,y,radius,start,stop)

    counter.stroke(); //to fill stroke

    if (no >= 100){
        clearTimeout(fill); // fill is a variable that call the function fillcounter()
    }
    no++;
}

var fill = setInterval(fillCounter, 50); // call the fillcouter() function after every 50ms
