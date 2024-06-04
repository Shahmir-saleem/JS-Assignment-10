var now = new Date()
var weekname = ['Sunday', 'Monday',"Tuesday","Wednesday","Thursday","Friday","saturday"]
var day = weekname[now.getDay()];
document.write("Today is ",day);
document.write('<br>');


function tellTime() {
var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
var thesec = now.getSeconds();
var ampm = ""
var hors = theHr-12;
console.log(hors);
if(hors <= 12){

ampm += 'p.m'
}else{
ampm += 'a.m' 
}
document.write("Current time is: " + hors  +  "  : " + theMin + "  : " + thesec + ampm);
};
tellTime()


