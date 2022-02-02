username = prompt("Adınız nedir?: ")

string = document.querySelector("div>div>strong>span#myName")

string.innerHTML = username


function showTime(){
  let date = new Date()
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let day = date.getDay()
  console.log
  
  if (day == "0"){day = "Pazar"}
  else if (day == "1"){day = "Pazartesi"}
  else if (day == "2"){day = "Salı"}
  else if (day == "3"){day = "Çarşamba"}
  else if (day == "4"){day = "Perşembe"}
  else if (day == "5"){day = "Cuma"}
  else if (day == "6"){day = "Cumartesi"}
  
  

hour = (hour < 10) ? "0" + hour : hour;
minute = (minute < 10) ? "0" + minute : minute;
second = (second < 10) ? "0" + second : second;


let time = hour + ":" + minute + ":" + second + " " + day;

document.getElementById("myClock").innerHTML = time;

let t = setTimeout(function(){ showTime() }, 1000);

}

showTime();