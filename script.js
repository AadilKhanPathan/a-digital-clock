function displayGreeting() {
  const now = new Date();
  let hours = now.getHours();
  let greeting = "";

  if (hours >= 5 && hours < 12) {
    greeting = " Good Morning!";
    document.querySelector(".greeting").innerHTML = `<span class="material-symbols-outlined">
wb_twilight
</span> ${greeting}`
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good afternoon!";
    document.querySelector(".greeting").innerHTML = `<span class="material-symbols-outlined">
sunny
</span> ${greeting}`
  } else if (hours >= 17 && hours < 21) {
    greeting = " Good Evening!";
    document.querySelector(".greeting").innerHTML = `<span class="material-symbols-outlined">
wb_twilight_2
</span> ${greeting}`
  } else {
    greeting = " Good Night!";
    document.querySelector(".greeting").innerHTML = `<span class="material-symbols-outlined">
mode_night
</span> ${greeting}`
  }

}

function updateclock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);

  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}  ${meridiem}`;
  document.getElementById("clock").textContent = timeString;
}

updateclock();
setInterval(updateclock, 1000);

// ----------display date---------------//
function displaydate() {
  let date = new Date();
  const options = {
    weekday: "long", // 'long' gives full day name
    year: "numeric",
    month: "short", // 'long' gives full month name
    day: "numeric",
  };
  document.querySelector(".date").innerHTML = date.toLocaleDateString(
    "en-US",
    options,
  );
}

window.onload = function () {
  displaydate();
  displayGreeting();
};
