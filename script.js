const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#1a237e",
    "#273c75",
    "#3949ab",
    "#5668c4",
    "#7986cb",
    "#8d98c2",
    "#aab6fe",
    "#c3d4ff",
    "#e3f2fd",
    "#ecf4fd",
    "#f0f7fd",
    "#f5f8fa",
    "#f7fafd",
    "#f7fbff",
    "#f8fdff",
    "#f0f6ff",
    "#e1ebff",
    "#c3d2ff",
    "#a9bcff",
    "#8796ff",
    "#677eff",
    "#000000"
  ];
  

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
