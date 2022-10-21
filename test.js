let time_count = 0;
const timer = setInterval(() => {
  console.log("타이머");
  time_count++;

  
}, 1000);

if (time_count === 5) {
    clearInterval(timer);
  }