var userInput = prompt("Input the three sides of the triangle")
var uInput =userInput.split(',')
var tSides = uInput.map(function(side){
  return parseInt(side)
})

if (tSides.length!= 3 || isNaN(tSides[0]) || isNaN(tSides[1]) || isNaN(tSides[2])){
alert("Incorrect input")}
else if ((tSides[0]+tSides[1])<=tSides[2]|| (tSides[1]+tSides[2])<=tSides[0]||(tSides[0]+tSides[2])<=tSides[1]){
alert("Not a triangle")}
else if(tSides[0]===tSides[1] && tSides[0]===tSides[2] && tSides[1]===tSides[2]) {
alert("Equilateral triangle")}
else if (tSides[0]===tSides[1] || tSides[1] === tSides[2] || tSides[0]=== tSides[2]){
alert("Isosceles triangle")}
else if (tSides[0]!=tSides[1] && tSides[1] != tSides[2] && tSides[0]!= tSides[2]){
alert("Scalene triangle")}
