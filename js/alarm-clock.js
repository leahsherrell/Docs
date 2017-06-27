function Alarm (setTime, moment) {
  this.setTime = setTime;
  this.moment = moment;
}

Alarm.prototype.goOff = function(setTime, moment) {
  if (setTime === moment) {
    return true;
  }
}

exports.alarmClockModule = Alarm;
