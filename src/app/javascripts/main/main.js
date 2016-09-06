const TimelineWindow = require('./timeline-window');
const FormWindow = require('./form-window');

class Main {
  constructor() {
    this.timelineWindow = new TimelineWindow();
    this.formWindow = new FormWindow();
  }
}

const main = new Main();
