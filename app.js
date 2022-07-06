// AJAX appl
// STEP1 create an XMLHttpRequest Object: tells the browser to create an XMLHttpRequest Object with all the methods to send and receive data
var request = new XMLHttpRequest()

// STEP2 create a callback function: process the return data and update the HTML on the page
request.change = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};

// STEP3 open a request: gives the browser 2 infos: HTTP method & URL (where to send)
request.open('GET', 'footer.html')

// STEP4 send the request
request.send()
