var Alarm = function (setTime) {
  this.setTime = setTime;
}

Alarm.prototype.goOff = function() {
  var currentMoment = moment().format('HH:mm');
  var setTime = this.setTime;
  while(setTime.charAt(0) === '0') {
     setTime = setTime.substr(1);
     }
     return setTime === currentMoment;
};

exports.alarmClockModule = Alarm;
