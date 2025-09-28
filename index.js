setInterval(()=> {
//to repeat function every 1 second
let timeNow= new Date();
console.log (timeNow);

let hours= document.getElementById ('hours');
let minutes= document.getElementById ('minutes');
let seconds= document.getElementById ('seconds');
let ampm=document.getElementById('ampm');
//reference html elements by Id

//added AMPM format

const meridiem =timeNow.getHours ()>12?"PM":"AM";
ampm.textContent=meridiem;

hours.innerHTML=(timeNow.getHours() <10?"0":"")+timeNow.getHours ();
minutes.innerHTML=(timeNow.getMinutes()<10?"0":"")+timeNow.getMinutes ();
seconds.innerHTML=(timeNow.getSeconds()<10?"0":"")+timeNow.getSeconds ();

},1000); 




