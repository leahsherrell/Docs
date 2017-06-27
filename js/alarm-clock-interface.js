var Alarm = require('./../js/alarm-clock.js').alarmClockModule;

$(function() {
  $('#alarm').submit(function(event) {
    event.preventDefault();
    // var currentMoment = moment().format('LT');
    var setTime = $('.setTime').val();
    var newAlarm = new Alarm (setTime);
    
    if (newAlarm.goOff(setTime)) {

      $('.alarm-display').show();
    }
  });
});
