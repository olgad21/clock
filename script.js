

function setDate() {
  const now = new Date();
  console.log(now);
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand = document.querySelector('.second-hand');
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand = document.querySelector('.min-hand');
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  let hours = now.getHours();
  hours = hours % 12;
  hours = hours ? hours : 12; 
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval (setDate, 1000);