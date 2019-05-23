var div = document.querySelector('.div');
var lit = document.querySelector('.lit');
var top_p =20;
var left_p = 0;


document.body.addEventListener("keyup", function(ev) 
{
    console.log(ev.which)
    if (ev.which == 37) {
        console.log("asdfgh")
        left_p -= 10;

        if(left_p <= 0)
        {
            left_p = 350;
        }
      
    }

    if (ev.which == 38) {
        top_p -= 10;
        if(top_p <= 0)
        {
            top_p = 350;
        }
      
    }

    if (ev.which == 39) {
        left_p += 10;

        if(left_p >= 350) left_p = 0;
        
    }

    if (ev.which == 40) {
        top_p += 10;
        if(top_p >= 350) top_p = 0;
        
    }
   
    lit.style.left = left_p + "px";
    lit.style.top = top_p + "px";
})

