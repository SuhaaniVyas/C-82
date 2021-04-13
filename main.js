cv = document.getElementById("c");
ctx = cv.getContext("2d");
var me;
cv.addEventListener("mousedown",MyMousedown);
function MyMousedown(e) {
    me="mousedown";
    console.log(me);
}
cv.addEventListener("mouseup",MyMouseup);
function MyMouseup(e) {
    me="mouseup";
    console.log(me);
}
cv.addEventListener("mouseleave",MyMouseleave);
function MyMouseleave(e) {
    me="mouseleave";
    console.log(me);
}
cv.addEventListener("mousemove",MyMousemove);
function MyMousemove(e) {
    x= e.clientX-cv.offsetLeft;
    y= e.clientY-cv.offsetTop;
    if (me=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= "red";
        ctx.lineWidth= "10000";
        ctx.moveTo(lastx,lasty);
ctx.lineTo(x,y);
ctx.stroke();
    }
    lastx=x;
    lasty=y;    
    }
