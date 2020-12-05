var circle=document.getElementById("circle");
var Upbn=document.getElementById("Upbn");
var downbn=document.getElementById("downbn");

var rotateValue=circle.style.transform;
var rotateSum;
Upbn.onclick=function()
{
    rotateSum=rotateValue+"rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}
downbn.onclick=function()
{
    rotateSum=rotateValue+"rotate(+90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}


