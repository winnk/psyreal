var Doctor = require('./../js/doctor.js').doctorModule;
var currentDoc = new Doctor();

function Display(result) {
  $('#symptom').empty();
  $('#showDocs').empty();
  result.forEach(function(doc) {
    $('#showDocs').append("<div class='procard'><li><div id='profile' class='col-md-8'><strong>Name:</strong> " + doc.profile.first_name +
      " " + doc.profile.last_name + ", " + doc.profile.title +
      "<br /> <strong>Specialty:</strong> " + doc.specialties[0].name +
      "<br><strong>Practice:</strong> " + doc.practices[0].name +
      "<br><strong>Practice phone:</strong> " + doc.practices[0].phones[0].number +
      "<br><strong>Practice address:</strong> " + doc.practices[0].visit_address.street +
      ", " + doc.practices[0].visit_address.city + " " + doc.practices[0].visit_address.state +
      " <br /><p></p><strong>Bio:</strong> " + doc.profile.bio +
      "</div><div id='image' class='col-md-1'><img src =" + doc.profile.image_url +
        "></div></li></div>");

  });
}

$(document).ready(function() {
  $('#symptomSearch').submit(function() {
    $('#showDocs').empty();
    var location = $('#location').val();
    var symptom = $('#symptom').val();
    event.preventDefault();
    currentDoc.getDoctors(symptom, location, Display);
  });
});
