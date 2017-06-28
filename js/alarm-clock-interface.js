var Alarm = require('./../js/alarm-clock.js').alarmClockModule;

$(function() {
  $('#alarm').submit(function(event) {
    event.preventDefault();
    var setTime = $('.setTime').val();

    var newAlarm = new Alarm (setTime);

    setInterval(function() {
      if (newAlarm.goOff()) {
        $('.alarm-display').show();
      }
    }, 1000);
  });
});
