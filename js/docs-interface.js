var DocOptions = require('./../js/docs.js').docOptionsModule;
var apiKey = require('./../.env').apiKey;

$(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    $('#listOfDocs').empty();

    var condition = $('#condition').val();
    $('#condition').val('');
    var newList = new DocOptions();
    newList.getDoctors(condition, apiKey);
  });
});
