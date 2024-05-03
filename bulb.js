let turn = document.getElementById("togglebtn");
let bulbimage = document.getElementById("bulb");
document.addEventListener('click', toggle)

function toggle(e)
{
    if(turn.textContent.includes('On'))
    {

        bulbimage.src="./bulb_image/bulb_on.png"
        turn.textContent= "Turn Off";
        // turn.style.backgroundColor = "yellow";
        // turn.style.color = "black";
    }

    else{
        bulbimage.src="./bulb_image/bulb_off.png"
        turn.textContent = "Turn On";
    }
}