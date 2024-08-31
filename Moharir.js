var a = document.getElementById("textarea1");
var b = document.getElementById("button1");
var c = document.getElementById("button2");
var d = document.getElementById("div2");

b.onclick = ()=> {
  d.innerHTML = a.value;
  localStorage.setItem("tex", a.value);
}
c.onclick = ()=> {
    d.innerHTML = "";
}
onload = ()=> {
    a.value = localStorage.getItem("tex");
}
