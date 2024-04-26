`use strict`;

const hour = document.querySelector(`.hour`);
const minute = document.querySelector(`.minute`);
const second = document.querySelector(`.second`);

// creating the time object and acessing to it

const getCurrentTime = function () {
  const today = new Date();

  const hrs = today.getHours();
  const mins = today.getMinutes();
  const seconds = today.getSeconds();

  // Updating DOM and Showing the current Time
  hour.textContent = `${hrs}:`;
  minute.textContent = `${mins}:`;
  second.textContent = `${seconds}`;
};

// when the page loads, it instantely got called.
// Calling getCurrentTime frequently

setInterval((e) => {
  getCurrentTime();
}, "100");
