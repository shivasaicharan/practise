function MyFunction() {
  var x = document.getElementsByClassName("hide");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
function display() {
  document.getElementById("myworld").innerHTML = "Have a nice day!";
}
function bulb(s) {
  var pic;
  if (s == 0)
    pic = "pic_bulboff.gif";
  else
    pic = "pic_bulbon.gif";
  document.getElementById("myimage").src = pic;
}
function date() {
  var x = new Date("2018-2-30");
  document.getElementById("date").innerHTML = Number(x);
}
function sort() {
  p.sort(function (a, b) { return (a - b) });
  document.getElementById("sort").innerHTML = p;
}
function print_window() {
  window.print();
}
alert("javascriptloaded");
var d = new Date();
var day = d.getDay();
var a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = "Today is : " + a[day] + ".";
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var prepand;
if (hour >= 12)
  prepand = 'PM';
else
  prepand = 'AM';
document.getElementById("time").innerHTML = "Current time is :" + hour + prepand + ":" + min + ":" + sec + ".";
console.log("page loaded " + hour);
var d = new Date();
var dd = d.getDate();
var mm = d.getMonth()+1;
var yyyy = d.getFullYear();
document.getElementById("date1").innerHTML = mm+"-"+dd+"-"+yyyy+", "+mm+"/"+dd+"/"+yyyy+", "+dd+"/"+mm+"/"+yyyy+".";