var Alarm = function (setTime) {
  this.setTime = setTime;
}

Alarm.prototype.goOff = function() {
   if (this.setTime === moment().format('HH:mm')) {
     return true;
  }
  return false;
};

exports.alarmClockModule = Alarm;
