function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
ctx.lineTo(300, 50);
ctx.stroke();
ctx.lineTo(100, 50);
ctx.stroke();
ctx.lineTo(100, 150);
ctx.stroke();
ctx.lineTo(300, 150);
ctx.stroke();
ctx.lineTo(300, 50);
ctx.stroke();

var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "green");


ctx.fillStyle = grd;
ctx.fillRect(75, 160, 150, 80);
