let time = new Date();
let dayNameArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dayIndex = time.getDay();
let dayName = dayNameArray[dayIndex];

document.getElementById('day-name').innerText = dayName+",";

let dayDate = time.getDate(); 
let monArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monIndex = time.getMonth();
let monthName = monArr[monIndex];
let year = time.getFullYear();

document.getElementById('date').innerText = monthName+" "+dayDate+" "+year;


