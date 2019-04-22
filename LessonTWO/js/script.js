let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    toDay = new Date().getDay() - 1;

    for (let i = 0; i < week.length; i++) {
      if (i == toDay) {
        if (week[i] == 'сб' || week[i] == 'вс') {
          document.write(`<p><b><i>${week[i]}</i></b></p>`);
        }else if (week[i] == 'вт') {
          document.write(`<p><em>${week[i]}</em></p>`);
        } else {
          document.write(`<p><b>${week[i]}</b></p>`);
        }
        } else if (week[i] == 'сб' || week[i] == 'вс') {
          document.write(`<p><b>${week[i]}</b></p>`);
        }else if (week[i] == 'вт') {
          document.write(`<p><em>${week[i]}</em></p>`);
        } else {
          document.write(`<p>${week[i]}</p>`);
        }
  }
  console.log(week);

  

let arr = ['245', '5688', '458', '355', '325', '789', '4905'];

 arr.forEach((e) => {
  if (e[0] == '3' || e[0] == '7') {
    console.log(e);
  }
});