const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let article = document.getElementById("end");
let items = document.querySelectorAll(".times");
let container = document.getElementsByClassName('button2')[0];
const FutureDate = new Date("2025-01-30T10:00:00");
let year = FutureDate.getFullYear();
let monthIndex = FutureDate.getMonth();
let month = months[monthIndex];
let date = FutureDate.getDate();
let dayIndex = FutureDate.getDay();
let day = daysOfWeek[dayIndex];
let hours = FutureDate.getHours();
let changeText = `Giveaway ends on ${hours} PM ${day} ${date} ${month} ${year}`;
article.textContent = changeText;

//Future time in ms
const futureTime = FutureDate.getTime();

function getRemaining() {
  const today = new Date().getTime();
  const t = futureTime - today;
  //value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //calculate
  let days = t / oneDay;
  days = Math.floor(days);
  let gethours = Math.floor((t % oneDay) / oneHour);
  let getminutes = Math.floor((t % oneHour) / oneMinute);
  let getseconds = Math.floor((t % oneMinute) / 1000);
  //set values
  const values = [days, gethours, getminutes, getseconds];
function format(item){
    if(item < 10){
        return item = `0${item}`
    }
    return item
}
  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
if(t<0){
    clearInterval(countdown)
    container.innerHTML = `<h4 class="expired"> sorry this giveaway has expired</h4>`
}
}
//countdown
let countdown =setInterval(getRemaining, 1000);

getRemaining();
