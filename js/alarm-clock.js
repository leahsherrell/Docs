var Alarm = function (setTime) {
  this.setTime = setTime;
}

Alarm.prototype.goOff = function() {
   this.setTime === moment().format('HH:mm')) {
     return true;
  }
};

exports.alarmClockModule = Alarm;
