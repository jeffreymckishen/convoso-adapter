// settings.js
class Settings {
    constructor(data = {}) {
      this.data = data;
    }
  
    get(key) {
      return this.data[key];
    }
  
    set(key, value) {
      this.data[key] = value;
    }
}

module.exports = new Settings();
