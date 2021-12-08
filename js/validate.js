function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');

let lat= parseFloat(document.getElementById('lat').value);
let lon= parseFloat(document.getElementById('lon').value);
let lat_error=document.getElementById("lat_error");
let lon_error=document.getElementById("lon_error");

let result = true;

if (lat < -90 || lat > 90 || isNaN(lat)) {
  lat_error.innerText = "must be a valid Latitude (-90 to 90)";
  result = false;
} 

if (lon < -180 || lon > 180 || isNaN(lon)) {
  lon_error.innerText = "must be a valid Longitude (-180 to 180)";
  result = false;
} 

return result;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
