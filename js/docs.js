var apiKey = require('./../.env').apiKey;

function DocOptions () {

}


DocOptions.prototype.getDoctors = function(medicalIssue, apiKey) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
    for (i=0; i<=result.data.length; i++)
     $('#doctorSearch').append('<li>' + '<h4>' + result.data[i].profile.first_name + ' ' + result.data[i].profile.last_name + '<h4>' + '<h5>' + result.data[i].practices[0].website + '</h5>' + '</li>');
     console.log(result);
    })
   .fail(function(error){
      alert("Sorry, the search was unsuccessful.");
    });
};

exports.docOptionsModule = DocOptions;
