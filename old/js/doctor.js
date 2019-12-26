var apiKey = require('./../.env').apiKey;
var apiPre = "https://api.betterdoctor.com/2016-03-01/doctors?query=";
var apiLocation = "&location=";
var apiPost = "&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=";

function Doctor() {}

Doctor.prototype.getDoctors = function(symptom, location, Display) {
 $.get(apiPre + symptom + apiLocation + location + apiPost + apiKey).then(function(response){
   var result = response.data;
      Display(result);
      })
     .fail(function(error){
      console.log("failed");
    });
  };

exports.doctorModule = Doctor;
