var person={
    name:"shiva",
    age:22,
    height:6
};
var c=[];
for(var key in person){
    c.push(key);
}
document.getElementById("result").innerHTML=c;
var d=[];
for(var key in person){
    d.push(person[key]);
}
document.getElementById("result1").innerHTML=d;
function allproperty(){
    document.getElementById("result2").innerHTML=Object.getOwnPropertyNames(Math);
}