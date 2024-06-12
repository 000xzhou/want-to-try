/**
 * I made this because I remember in my python code for fitness.
 * I have 2 timer code and it was written so bad.
 * I remember it got so many globle variables in an already messy looking code.
 * So I made this class so it's easy to make mutiply timers and still beable to start and stop them.
 */
class Timer {
  constructor() {
    this.time = 0;
    this.interval = null;
  }

  start() {
    // adds 1 every sec to time variable
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  }
  reset() {
    // Ensure the timer is stopped before resetting
    this.stop();
    this.time = 0;
  }
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      // Clear the interval reference
      this.interval = null;
    }
  }

  getTime() {
    // return the time
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }
}
