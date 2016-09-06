const {app} = require('electron');
const TimelineWindow = require('./timeline-window');
const FormWindow = require('./form-window');
const AppMenu = require('./app-menu');

class Main {
  constructor() {
    this.timelineWindow = new TimelineWindow();
    this.formWindow = new FormWindow();

    this.start();
  }

  start() {
    app.on('ready', () => {
      AppMenu.setup();
    });
  }
}

const main = new Main();
