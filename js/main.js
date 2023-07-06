
function updateClock() {
  var now = new Date();
  var dName = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Nobember", "December"];
  var weekList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var month = monthList[mo];
  var dayName = weekList[dName];

  // --------------- Time Condition --------------

  if (hou > 12) {
    hou = hou - 12;
    pe = "PM";
  }

  hou = (hou == 0) ? 12 : hou;
  hou = (hou < 10) ? "0" + hou : hou;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;


  document.getElementById("dayName").innerHTML = dayName;
  document.getElementById("dayName").textContent = dayName;

  document.getElementById("month").innerHTML = month;
  document.getElementById("dayNum").innerHTML = dnum;
  document.getElementById("yearNum").innerHTML = yr;

  document.getElementById("hour").innerHTML = hou;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("period").innerHTML = pe;

  setTimeout(updateClock, 1000);
}


updateClock();