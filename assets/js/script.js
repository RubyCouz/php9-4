function blink()
{
    var element = document.getElementById('blink');
    var random = Math.round(Math.random()*5);

    switch (random)
    {
        case 0:
        element.style.color = "red";
        break;

        case 1:
        element.style.color = "green";
        break;

        case 2:
        element.style.color = "blue";
        break;

        case 3:
        element.style.color = "yellow";
        break;

        case 4:
        element.style.color = "purple";
        break;
    }
}

window.onload = function(){ setInterval(blink, 500); };
