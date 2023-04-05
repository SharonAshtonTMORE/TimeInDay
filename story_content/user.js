function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5h5HnB3VXHy":
        Script1();
        break;
  }
}

function Script1()
{
  
const player = GetPlayer();

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

date.getHours().toString().padStart(2, '0');
date.getMinutes().toString().padStart(2, '0');

Time = hours + ':' + minutes;
player.SetVar('Time',Time);


let Blessing;

if(hours>=12&&hours<=18){
Blessing ="Noon";
}
else if (hours<18&&hours>=05){
Blessing ="Morning";
}
else if (hours>=00&&hours<=05){
Blessing ="Night";
}

player.SetVar('blessing',Blessing);



}

