var userInput = '2,3,4'
var tempUserInput = prompt("Input the three sides of the triangle")
var uInput =userInput.split(',')
var tSides = uInput.map(function(side){
  return parseInt(side)
})

if (tSides[0]===tSides[1] && tSides[0]===tSides[2] && tSides[1]===tSides[2]) {
alert("Equilateral triangle") }
else if (tSides[0]===tSides[1] || tSides[1] == tSides[2] || tSides[0]=== tSides[2]){
alert("Isosceles triangle")}
else if (tSides[0]!=tSides[1] && tSides[1] != tSides[2] && tSides[0]!= tSides[2]){
alert("Scalene triangle")}
else if ((tSides[0]+tSides[1]<=tSides[2])|| (tSides[1]+tSides[2]<=tSides[0])||(tSides[0]+tSides[2]<=tSides[1])){
alert("Not a triangle")}
else {
alert("Incorrect input")
}
