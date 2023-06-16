function convert() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
  
    if (unit === 'celsius') {
      var convertedTemperature = (temperature * 9/5) + 32;
      document.getElementById('result').textContent = convertedTemperature + '°F';
    } else if (unit === 'fahrenheit') {
      var convertedTemperature = (temperature - 32) * 5/9;
      document.getElementById('result').textContent = convertedTemperature + '°C';
    }
  }
  