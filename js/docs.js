var apiKey = require('./../.env').apiKey;

function DocOptions () {

}


DocOptions.prototype.getDoctors = function(medicalIssue, apiKey) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     $('#doctorSearch').append('<li>' + result.data[0].profile.first_name + '</li>');
     console.log(result);
    })
   .fail(function(error){
      alert("Sorry, the search was unsuccessful.");
    });
};

exports.docOptionsModule = DocOptions;
