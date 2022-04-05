const historyBtn = document.querySelector('.history');

const showHistory = () => {
  timeList.textContent = '';
  let num = 1;

  timesArray.forEach(time => {
    const newTime = document.createElement('li');
    newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;

    timeList.appendChild(newTime);
    num++;

  })
}



historyBtn.addEventListener('click', showHistory);
