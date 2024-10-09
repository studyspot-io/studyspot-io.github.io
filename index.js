function displayTime() {
  const now = new Date(); // Get the current date and time
  let hours = now.getHours(); // Get the current hour
  let minutes = now.getMinutes(); // Get the current minutes
  let ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, set it to 12

  // Add leading zero to minutes if necessary
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Format the time as "HH:MM AM/PM"
  const timeString = hours + ':' + minutes + ' ' + ampm;

  // Display the time in an HTML element
  document.getElementById("time").textContent = timeString;
}

// Update the time every second
setInterval(displayTime, 1000);

// Initialize the display immediately
displayTime();
