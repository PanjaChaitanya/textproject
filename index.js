function myFun()
{
    var ui=document.getElementById("myInput").value;
    
    displaymsg(ui);
}
function displaymsg(a)
{
    document.getElementById("msg").textContent=a;
}