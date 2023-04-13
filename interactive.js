let btnDiv = document.createElement("div");
btnDiv.className = "btnDiv";

//colorBtn
let colorBtn = document.createElement('div');
colorBtn.className = "color";
btnDiv.appendChild(colorBtn);

//whiteBtn
let whiteBtn = document.createElement("button");
whiteBtn.innerText = "White";
whiteBtn.className = "white";
whiteBtn.id = "white";
// whiteBtn.style.padding = 2+"px";
colorBtn.appendChild(whiteBtn);

//blackBtn
let blackBtn = document.createElement('button');
blackBtn.innerText = "Black";
blackBtn.className = "black";
blackBtn.id = "black";
colorBtn.appendChild(blackBtn);

//rainbow
let rainbow = document.createElement('button');
rainbow.innerText = "Rainbow";
rainbow.className = "rainbow";
rainbow.id = "rainbow";
colorBtn.appendChild(rainbow);

//combinedDiv
let comDiv = document.createElement('div');
comDiv.id = "comDiv";
btnDiv.appendChild(comDiv);

//title
let title = document.createElement('div');
title.id = "title";
comDiv.appendChild(title);
//h1
let h1 = document.createElement('h1');
h1.id = "h1title";
h1.innerText = "Sketch-Book";
title.appendChild(h1);

//inputDiv
let inputDiv = document.createElement('div');
inputDiv.id = "inputDiv"
comDiv.appendChild(inputDiv);

//xvalue
let xDiv = document.createElement('div');
xDiv.id = "xDiv";
inputDiv.appendChild(xDiv);
let xvalue = document.createElement('input');
xvalue.type = "text";
xvalue.name = "xvalue";
xvalue.id = "xvalue";
xDiv.appendChild(xvalue);
let xlvalue = document.createElement('label');
xlvalue.for = "xvalue";
xlvalue.id = "xvalue";
xlvalue.innerText = "grid-X";
xDiv.appendChild(xlvalue);

//yvalue 
let yDiv = document.createElement('div');
yDiv.id = "yDiv";
inputDiv.appendChild(yDiv);
let yvalue = document.createElement('input');
yvalue.type = "text";
yvalue.name = "yvalue";
yvalue.id = "yvalue";
yDiv.appendChild(yvalue);
let ylvalue = document.createElement('label');
ylvalue.for = "yvalue";
ylvalue.id = "yvalue";
ylvalue.innerText = "grid-Y";
yDiv.appendChild(ylvalue);
let btnValue = document.createElement('button');
btnValue.innerText = "GO";
btnValue.id = "btnValue";
inputDiv.appendChild(btnValue);

var columns = 64;
var rows = 64;

const w = 910 / columns;


var grid = document.createElement('div');
grid.className = 'grid';
grid.id = "grid";
for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div');
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var row = document.createElement('div');
        row.className = 'row';
        row.id = 'row';
        row.className = 'row';
        row.style.width = w + 'px';
        row.style.height = w + 'px';
        column.appendChild(row);
    }
    grid.appendChild(column);
}

document.body.appendChild(btnDiv);
document.body.appendChild(grid);
//hovering effect
let blackAcess = document.getElementById("black");
blackAcess.addEventListener('click', (e) => {
    let gridAc = document.getElementById('grid');
    gridAc.addEventListener('click', (e) => {
        let colorEle = document.querySelectorAll(".row");
        for (let i = 0; i < colorEle.length; i++) {
            colorEle[i].addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = "black";
            });
        }
    });
});

let whiteAcess = document.getElementById("white");
whiteAcess.addEventListener('click', (e) => {
    let gridAc = document.getElementById('grid');
    gridAc.addEventListener('click', (e) => {
        let colorEle = document.querySelectorAll(".row");
        for (let i = 0; i < colorEle.length; i++) {
            colorEle[i].addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = "white";
            });
        }
    });
});

let rainAcess = document.getElementById("rainbow");
rainAcess.addEventListener('click', (e) => {
    let gridAc = document.getElementById('grid');
    gridAc.addEventListener('click', (e) => {
        let colorEle = document.querySelectorAll(".row");
        for (let i = 0; i < colorEle.length; i++) {
            colorEle[i].addEventListener('mouseover', (e) => {
                let r = Math.floor((Math.random() * 255) + 1);
                let g = Math.floor((Math.random() * 255) + 1);
                let b = Math.floor((Math.random() * 255) + 1);
                e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            });
        }
    });
});