$(document).ready(function(){
  setInterval(function() {
    $('.moment').text(moment().format('LTS'));
  }, 1000);
});
