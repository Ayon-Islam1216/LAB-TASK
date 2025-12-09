const clock=document.getElementById("clock");
function updateClock()
{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    if(h>=12)
    {
        var period="PM";
    }
    else{
        period="AM";
    }
    h=h%12;
    if(h==0)
    {
        h=12;
    }
    if(m<10)
    {
        m="0"+m;
    }
    if(s<10)
    {
        s="0"+s;
    }
    clock.innerHTML= h+":"+m+":"+s+" "+period;
}
setInterval(updateClock,1000);
updateClock();