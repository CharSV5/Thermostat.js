$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp()

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemp()
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemp()
  })

  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
  }


})
