    class Helper {
    constructor(callback) {
      this.callback = callback
    }
  
    waitUntil(hour, minute, second) {
      var now = new Date();
      var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, second, 0) - now;
      if (millisTill10 < 0) {
          millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
      }
      setTimeout(this.callback, millisTill10);
    }
  
    timeoutAfter(mseconds) {
      setInterval(this.callback, mseconds);
    }
  }

  module.exports = Helper // 👈 Export class