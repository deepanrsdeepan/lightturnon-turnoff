var bulb = 0;

function findbulp()
{
    if(bulb==0)
    {
        document.getElementById("image").src="e2.png" ;
        bulb=1;
    }
    else{
        document.getElementById("image").src="r(2).png";
        bulb=0;
    }

}