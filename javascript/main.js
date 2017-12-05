// ========================================
// Your JavaScript goes here
// ========================================

// If you want to use the toggleClass
// function, uncomment the function below
// and replace '.myClass' and
// 'class-to-toggle' with your own data.
// Both parameters must be in quotes.

// toggleClass('.myClass', 'class-to-toggle')

//Create Text Node for temperatures
    var coldRun = document.createTextNode('Put on a jacket, suck it up, and run like the wind.');
    
function coldRunDiv() {
    document.getElementsByName('temp-range').appendChild(coldRun);
} 
      
    // Set Temperature Body Class & create text
    if (data.main.temp < 45) {
      document.body.className = 'cold';
        coldRunDiv();
    } else if (data.main.temp >= 45 && data.main.temp <= 75) {
      document.body.className = 'warm'
      coldRunDiv();
    } else {
      document.body.className = 'hot'
    }