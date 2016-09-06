const {app, Menu, MenuItem} = require('electron');

module.exports = class AppMenu {
  static setup(){
    const tweetMenu = new MenuItem({
      label: 'Tweet',
      submenu: [
        {
          label: 'New Tweet',
          click() {
            app.emit('showForm');
          }
        }
      ]
    });

    const template = AppMenu.getBasicTemplate();
    const menu = Menu.buildFromTemplate(template);
    menu.append(tweetMenu);
    menu.append(tweetMenu);
    Menu.setApplicationMenu(menu);
  }

  static getBasicTemplate() {
    const template = [];

    return template;
  }
};
