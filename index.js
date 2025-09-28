setInterval(()=> {
let timeNow= new Date();
console.log (timeNow);

let hours= document.getElementById ('hours');
let minutes= document.getElementById ('minutes');
let seconds= document.getElementById ('seconds');

hours.innerHTML=(timeNow.getHours() <10?"0":"")+timeNow.getHours ();
minutes.innerHTML=(timeNow.getMinutes()<10?"0":"")+timeNow.getMinutes ();
seconds.innerHTML=(timeNow.getSeconds()<10?"0":"")+timeNow.getSeconds ();

},1000); 




