var x = document.getElementById("tablehead")
var table = document.getElementById("mytable");
// var z = document.getElementById("newentry")
if (x.children.length <= 1){
    table.style.display = "none"
    console.log(x.children.length)
}

var y = document.getElementsByTagName("button")[0]
console.log(y)
y.onclick = function addtion() {
    console.log("right")
    console.log(document.getElementById("newname").value)
    console.log(x.children.length)
    

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(x.children.length);
    // row.style.display = "block"
    

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = x.children.length -1;
    cell2.innerHTML = document.getElementById("newname").value;
    // var p = document.createElement("tr")
    // p.class = "cells"
    // p.innerHTML = x.children.length + 1
    // var q = document.createElement("tr")
    // q.class = "cells"
    // q.innerHTML = document.getElementById("newname").value
    // p.style.display = "block"
    // q.style.display = "block"
    // var n = document.createElement("tr")
    // n.class = "rows"
    // n.style.display = "block"
    // n.style.width = "100%"
    // n.appendChild(p)
    // n.appendChild(q)
    // x.appendChild(n)
    if (x.children.length >=1){
        table.style.display = "block"
        console.log(x.children.length)
    }
    document.getElementById("newname").value = " "
}
