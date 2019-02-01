var arr=[];
function assign(){
    arr.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("result").innerHTML=arr;
}
function percentile() {
    var v=Number(document.getElementById("num1").value);
    for (var i = 0, l = arr.length; i < l;) {
        if (v <= arr[i]) {
            console.log(v==arr[i]);
            if(v==arr[i]){
                var c=((i+0.5)/l)*100;
                document.getElementById("result1").innerHTML=c;
                return;
            }
            else{
                var c=(i/l)*100;
                document.getElementById("result1").innerHTML=c;
                return;
            }
        }
        else{
            i++;
        }
    }
}