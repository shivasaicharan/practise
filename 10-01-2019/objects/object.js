var t= 0;
var person= {
    fname:"Ramu",
    sclass:"10",
    age:"15"
}
document.getElementById("student").innerHTML= person.fname+" is "+person.sclass+"th class of age:"+person.age;
delete person.age;
document.getElementById("class").innerHTML= person.fname+" is "+person.sclass+"th class";
var x;
for(x in person){
    if(person[x]!=NaN)
      t++;
}
document.getElementById("for").innerHTML= t;
var lib= [
    {
        a: "Bill Gates",
        t: "The Road Ahead",
        rs: "Already Read"
    },
    {
        a: "Steve Jobs",
        t: "Walter Isaacson",
        rs: "Already Read"
    },
    {
        a: "Suzanne Collins",
        t:  "Mockingjay: The Final Book of The Hunger Games", 
        rs: "You Still need to Read"
    }
];
var h="";
var y;
for(y=0;y<lib.length;y++){
    if(y<=lib.length)
      h+=lib[y].rs+" '"+lib[y].a+"' by"+lib[y].t+"<br>";
}
document.getElementById("books").innerHTML=h;
var s="dog";
var m,n;
var sname="";
for(m=0;m<s.length;m++){
  for(n=m+1;n<s.length+1;n++)
    sname+="'"+s.slice(m,n)+"'"+", ";
}
document.getElementById("dog").innerHTML="["+sname+"]";
var a=[2,4,6,7,0,1];
a.sort (function(a,b) {return (a-b)})
document.getElementById("sort").innerHTML=a;
function reverse(){
var b=document.getElementById("reverse").value;
var c=b.split("").reverse().join("");
document.getElementById("rev").innerHTML="reverse of "+b+" is "+c;
}