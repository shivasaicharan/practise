function create(){
    var r=Number(document.getElementById("row").value);
    var c=Number(document.getElementById("column").value);
    for(i=0;i<r;i++){
        var x=document.getElementById("table").insertRow(i);
        for(j=0;j<c;j++){
            y=x.insertCell(j);
        }
    }
}