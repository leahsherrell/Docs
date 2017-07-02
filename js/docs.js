var apiKey = require('./../.env').apiKey;

function DocOptions () {

}


DocOptions.prototype.getDoctors = function(medicalIssue, apiKey) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    if (result.data.length === 0) {
      $('#listOfDocs').append('<li>Sorry, no doctors found.</li>')
    } else {
    console.log(result.data.length);
      for (i=0; i<result.data.length; i++) {
        $('#listOfDocs').append('<li>' + '<h4>' + result.data[i].profile.first_name + ' ' + result.data[i].profile.last_name + '<h4>' + '</li>');
        console.log(result);
      }
    }
  })
  .fail(function(error){
    console.log("Failed");
  });
};

exports.docOptionsModule = DocOptions;
