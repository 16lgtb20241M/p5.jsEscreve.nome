function setup() {
    createCanvas(600, 600);
    background("#CBE7F3");
  }
  
  function draw() {
    stroke("rgb(101,168,65)");
    fill("rgb(255,0,129)");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  