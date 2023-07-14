var a;
function show_spoilers()
{
  if(a==1)
      {
        document.getElementById("best-moments-container").style.display="none";
        return a=0;
      }

  else
      {
        document.getElementById("best-moments-container").style.display="block";
        return a=1;
      }
}