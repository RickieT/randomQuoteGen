// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message = '';
var red;
var green;
var blue;
var quotesViewed = [];


function print(quote) {
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = quote;
}

// Function to get quotes from the array and store in the variable randomQuote

function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);

// Discovered a useful function for splicing things within an array from MDN
    var spliceQuote = quotes.splice(randomQuote, 1) [0];
    quotesViewed.push(spliceQuote);
    if (quotes.length === 0) {
        quotes = quotesViewed;
        quotesViewed = [];
    }
    return spliceQuote;
}


// Function to generate random color for background, red - green - blue

function randomColorGen() {
    var randomColor;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return randomColor;
}

// Function to take previous random object and print to screen
function printQuote() {
    var quotes = getRandomQuote();
    message = '<p class="quote">' + quotes.quote + '</p>';
    message += '<p class="source">' + quotes.source;
    if ( quotes.citation ) {
        message += '<span class="citation">' + quotes.citation + '</span>';
    } else {
        message += '';
    }
    if (quotes.year) {
        message += '<span class="year">' + quotes.year + '</span>';
    } else {
        message += '';
    }
    if (quotes.tags) {
        message += '<h3>' + quotes.tags + '</h3>';
    } else {
        message += '';
    }
    print(message);
    // Generate color
    randomColorGen();
    //Change background with new color
    document.getElementById('bgcolor').style.backgroundColor = randomColorGen();
}






