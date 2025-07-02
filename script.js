function genDay() {
  const hours = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];

  let hoursDivs = ``;
  for (let i = hours.length - 1; i >= 0; --i) {
    const h = hours[i]
    const divHour = `<div class="hour">${h}</div>`
    hoursDivs += divHour;
  }
  // for (const h of hours) {
  //   const divHour = `<div class="hour">${h}</div>`
  //   hoursDivs += divHour;
  // }

  const dayDiv = `<div class="day">${hoursDivs}</div>`;
  return dayDiv;
}

function genWeek(count) {
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "С", "В"];
    let daysDivs = '';
    for (const day of days) {
      const genDayHtml = genDay();
      daysDivs += genDayHtml;
    }

    const weekDiv = `<div class="week">${daysDivs}</div>`;

    return weekDiv
}

function initData() {
  document.getElementById('main').innerHTML = genWeek();
}

initData();
