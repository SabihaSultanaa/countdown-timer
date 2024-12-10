
const edate = "11 April 2025 12:00:00 AM ";
document.querySelector("#edate").innerHTML=edate;
const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const min=document.querySelector("#min");
const sec=document.querySelector("#sec");


function countdownclock()
{

const end = new Date(edate);
 const cur = new Date();
 let diff=(end-cur)/1000;
 if(diff<0)return;
console.log(diff);
 days.innerText=(Math.floor(diff/3600/24));
 hours.innerText=(Math.floor(diff/3600)%24);
 min.innerText=(Math.floor(diff/60)%60);
 sec.innerText=(Math.floor(diff%60));

}
setInterval(() => {countdownclock();
    
}, 1000)
