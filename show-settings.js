var a;
function show_settings()
{
  if(a==1)
      {
        document.getElementById("custom-settings").style.display="none";
        return a=0;
      }

  else
      {
        document.getElementById("custom-settings").style.display="block";
        return a=1;
      }
}