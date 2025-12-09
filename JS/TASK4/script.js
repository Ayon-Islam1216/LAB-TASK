const nametf=document.getElementById("name");
const roll=document.getElementById("roll");
const dept=document.getElementById("dept");
const btn=document.getElementById("add");
const data=document.getElementById("data");

function add()
{
    let row=data.insertRow();
    row.insertCell(0).innerText=nametf.value;
    row.insertCell(1).innerText=roll.value;
    row.insertCell(2).innerText=dept.value;
    row.insertCell(3).innerHTML="<button class='del'>Delete</button>";
    nametf.value="";
    roll.value="";
    dept.value="";
}
function del(event)
{
    event.target.parentElement.parentElement.remove();
}
btn.addEventListener("click",add);
data.addEventListener("click",del);