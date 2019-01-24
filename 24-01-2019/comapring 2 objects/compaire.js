var object1={
    name:"shiva",
    age:22,
    height:4
};
var object2={
    name:"abhi",
    age:22,
    height:5
};
var c="";
for(var key in object1){
    if(object1[key]==object2[key]){
        c=c+key+" = "+object1[key];
    }
}
document.getElementById("result").innerHTML=c+" are same in the object";