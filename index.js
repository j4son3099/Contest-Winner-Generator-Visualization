var fonts = ["Comic Sans MS", "Rockwell", "Palatino", "Montserrat", "Copperplate"];

let maxWinners = 7
  let winners = []
  
  let minNumber =1
  let maxNumber = 108
  

function setup() {
  createCanvas(windowWidth, windowHeight);
 
 
  for (let i =0; i<maxWinners;i++){
    winners.push(random(minNumber,maxNumber)>>0)
  }
  
  noLoop()
}

function draw() {
  
  background(color(random(255)>>0,random(255)>>0,random(255)>>0));
  
   for (let i =0; i<=maxWinners;i++){
     
     fill(random(255)>>0)
      circle(random(50,width-50)>>0,random(50,width-50)>>0,random(50,height-50)>>0)
  }
  
  for (let i =0; i<maxWinners;i++){
    push()
    rotate(random(-Math.PI/25,Math.PI/25))
    textSize(80)   
    
    textFont(random(fonts))
    fill(color(random(255)>>0,random(255)>>0,random(255)>>0))
    text(winners[i],random(50,width-50)>>0,random(50,height-50)>>0)
    pop()
  }
}
