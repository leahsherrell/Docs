var Alarm = require('./../js/alarm-clock.js').alarmClockModule;

$(function() {
  $('#alarm').submit(function(event) {
    event.preventDefault();

    var setTime = $('.setTime').val();
    var moment = 3;
    var newAlarm = new Alarm (setTime, moment);

    // if (newAlarm.goOff(setTime, moment)) {
    //   $('.alarm-display').show();
    // }
  });
});
