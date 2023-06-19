$(document).ready(function(){
  const root = document.querySelector(":root"); // we first get the root element
  for(let i = 0; i < 10; i++) {
  root.style.setProperty(`--rando${i}`, `${Math.floor(Math.random() * 200) + 1}px`);
}
});
