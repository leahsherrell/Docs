var apiKey = require('./../.env').apiKey;

function DocOptions () {

}


DocOptions.prototype.getDoctors = function(medicalIssue, apiKey) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    if (result.data.length === 0) {
      $('#listOfDocs').append('<li>Sorry, no doctors found.</li>')
    } else {
      for (i=0; i<result.data.length; i++) {
        $('#listOfDocs').append('<li>' + '<div class="col-sm-6"><h3>Dr. ' + result.data[i].profile.first_name + ' ' + result.data[i].profile.last_name + ', ' + result.data[i].profile.title + '</h3>' + '<p>' + result.data[i].specialties[0].description + '</p></div>' + '<div class="col-sm-6"><img src = "' + result.data[i].profile.image_url + '"' + '></div></li>');
        console.log(result);
      }
    }
  })
  .fail(function(error){
    console.log("Failed");
  });
};

exports.docOptionsModule = DocOptions;
