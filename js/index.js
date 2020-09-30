'use strict';
const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};
//Новый таймер
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
//Добавляем 0 спереди, если в таймере одна цифра
  pad(value) {
    return String(value).padStart(2, '0');
  }
//Таймер
  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
//Разница между будущей и текущей датой
  timeDifference() {
    let time = null;
    const currentDate = Date.now();
    time = this.targetDate - currentDate;
    this.updateClockface(time);
  }
//Обратный отчет каждую секунду
  reverseTimer() {
    this.timeDifference();
    setInterval(() => this.timeDifference(), 1000);
  }
}
//Дата отчёта
const reverse = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 01, 2021'),
});

reverse.reverseTimer();
