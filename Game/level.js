document.body.style.zoom=0.9;this.blur();

var area = document.getElementById("area");
var cell = document.getElementsByClassName("cell");

var player = "x";

function cellClick(){

    player = player === "x" ? "o" : "x";
    var data = [];
    if(!this.innerHTML) {
        this.innerHTML = player;
    }
    else {
        alert("Ячейка занята");
        return;
    }

    for(var i in cell) {
        if(cell[i].innerHTML === player){
            data.push(parseInt(cell[i].getAttribute('pos')));
            console.log("номер " +i);
        }
    }
    //console.log(data);
}


window.onload = function() {
    function strPad() {
        //console.log(this.value);
        c = Math.pow(this.value,2)
    }
    var bt = document.getElementsByClassName("three");
    for (var i = 0; i < bt.length; i++) {
        bt[i].onclick = strPad;
    }
}



function initOne(c){
    if(c === 9){
        let block = document.querySelector("#area")
        block.style.width = '218 px'
    }
    if(c === 25){
        let block = document.querySelector("#area")
        block.style.width = '312px'
    }
    if(c === 49){
        let block = document.querySelector("#area")
        block.style.width = '434px'
    }

    for(var i = 1; i <= c; i++){
        area.innerHTML += "<div class='cell' pos="+ i +"></div>";
    }
    for(var i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click',cellClick,false);
    }
}






