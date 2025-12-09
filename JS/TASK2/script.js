const image=document.getElementById("image");
const btnNext=document.getElementById("next");
const btnPrevious=document.getElementById("previous");
let imageArr=["iphone.jpg","Nokia.jpg","vivo.jpeg"];
let len=imageArr.length;
let i=0;

function Previous(){
    if(i==0)
    {
        i=len;
    }
    i--;
    image.src=imageArr[i];
}
function Next(){
    if(i==len-1)
    {
        i=-1;
    }
    i++;
    image.src=imageArr[i];
}


btnNext.addEventListener("click",Next);
btnPrevious.addEventListener("click",Previous);