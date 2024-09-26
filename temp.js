var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString("A simple yet powerful native javascript")
  .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
  .start();
