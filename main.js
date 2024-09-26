var app = document.getElementById("app");
console.log(app);
var typewriter = new Typewriter(app, {
  loop: false,
  delay: 100,
});

typewriter.typeString("Meet Our <br>Amazing <br>Team!!").start();
