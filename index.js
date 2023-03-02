//a simple contest winner generator

//input colors
var fonts = ["Comic Sans MS", "Rockwell", "Palatino", "Montserrat", "Copperplate"];

//Number of winners.  There's no check so winning multiple times is possible. 
let maxWinners = 7
  let winners = []

//Number range to select winners from
  let minNumber =1
  let maxNumber = 108

function setup() {
  createCanvas(windowWidth, windowHeight);
  
 //choose the winners
  for (let i =0; i<maxWinners;i++){
    winners.push(random(minNumber,maxNumber)>>0)
  }
  
  noLoop()
}

function draw() {
  
  //random background color is chosen
  background(color(random(255)>>0,random(255)>>0,random(255)>>0));
  
  //background drawing for style, circles of random size and color for this example
   for (let i =0; i<=maxWinners;i++){ 
     fill(random(255)>>0)  //color of the circle.
      circle(random(50,width-50)>>0,random(50,width-50)>>0,random(50,height-50)>>0)
  }
  
  //display winners
  for (let i =0; i<maxWinners;i++){
    push()  
    rotate(random(-Math.PI/25,Math.PI/25))  //rotate the text a little so it's more active looking
    textSize(80)   
    textFont(random(fonts))  //choose a random font
    fill(color(random(255)>>0,random(255)>>0,random(255)>>0))   //use a random font color
    text(winners[i],random(50,width-50)>>0,random(50,height-50)>>0)  //display the winner in a radom location
    pop()
  }
}
