// ========================================
// Your JavaScript goes here
// ========================================

// If you want to use the toggleClass
// function, uncomment the function below
// and replace '.myClass' and
// 'class-to-toggle' with your own data.
// Both parameters must be in quotes.

// toggleClass('.myClass', 'class-to-toggle')

var paragraph = document.getElementsByName('temp-range');
var coldRun = document.createTextNode('Put on a jacket, suck it up, and run like the wind.');
    
function coldRunDiv() {
    paragraph.appendChild(coldRun);
} 