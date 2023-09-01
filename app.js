// Calculate and set the height of the card to match its width
window.addEventListener('load', function() {
    const card = document.getElementById('squareCard');
    const cardWidth = card.clientWidth;
    const cardHeight = card.clientHeight;
    if(cardHeight < cardWidth)
        card.style.height = `${cardWidth*0.9}px`;
    else
        card.style.width = `${cardHeight}px`;
});
window.onload = function() {
    // Find the button element by its ID
    const button = document.getElementById('my-btn');

    // Simulate a button click
    button.click();
};

// Replace 'your-csv-file.csv' with the actual path or URL of your CSV file
const csvFilePath = './shayari.csv';

// Arrays to store the data from the first three columns
const colmood = [];
const colang = [];
const colquotes = [];

// Fetch the CSV file
fetch(csvFilePath)
    .then(response => response.text())
    .then(csvData => {
    // Split CSV data into lines
    const lines = csvData.split('\n');

    // Iterate through each line (row) of the CSV
    lines.forEach(line => {
        const columns = line.split(',');

        // Extract values from the first three columns
        if (columns.length >= 3) {
        colmood.push(columns[0]);
        colang.push(columns[1]);
        colquotes.push(columns[2]);
        }
});


})
.catch(error => {
console.error('Error fetching or processing the CSV:', error);
});

function intersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}
function getRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

function showQuotes(){
    // Print or use the extracted arrays
    console.log('Column 1 Length:', colmood.length);
    console.log('Column 2 Length:', colang.length);
    console.log('Column 3 Length:', colquotes.length);

    const lang = document.getElementById('language').value;
    const mood = document.getElementById('mood').value;
    console.log(lang,mood);

    var moodres = []
    var langres = []
    for(let i = 0; i < colmood.length; i++)
    {
        if(colmood[i] == mood)
            moodres.push(i);
    }
    for(let i = 0; i < colmood.length; i++)
    {
        if(colang[i] == lang)
            langres.push(i);
    }
    var finalres = intersection(moodres,langres);
    var finalindex = getRandomElementFromArray(finalres);
    var originalText = colquotes[finalindex];
    originalText = originalText.toString();

    // Get a reference to the div element
    var divElement = document.getElementById("showresult");

    // Split the text into an array at each comma
    var textArray = originalText.split('-');

    // Join the array elements with commas and newline characters
    var modifiedText = textArray.join(',\n');

    modifiedText = modifiedText.replaceAll('*',',');
    modifiedText = modifiedText.replaceAll('@','\n');
    modifiedText = modifiedText.replaceAll('#','-');

    // Set the modified text as the content of the div element
    divElement.innerText = modifiedText;
}

function pic1(){
    const p1 = document.getElementById("the1");
const p2 = document.getElementById("the2");
const p3 = document.getElementById("the3");
const p4 = document.getElementById("the4");
const p5 = document.getElementById("the5");
const p6 = document.getElementById("the6");
const myDiv = document.getElementById('mastercard');
myDiv.style.backgroundImage = `url(pic1.jpeg)`;
    p1.style.border = '2px solid red';
    p2.style.border = 'none';
    p3.style.border = 'none';
    p4.style.border = 'none';
    p5.style.border = 'none';
    p6.style.border = 'none';
}
function pic2(){
    const p1 = document.getElementById("the1");
const p2 = document.getElementById("the2");
const p3 = document.getElementById("the3");
const p4 = document.getElementById("the4");
const p5 = document.getElementById("the5");
const p6 = document.getElementById("the6");
const myDiv = document.getElementById('mastercard');
myDiv.style.backgroundImage = `url(pic2.jpg)`;
    p2.style.border = '2px solid red';
    p1.style.border = 'none';
    p3.style.border = 'none';
    p4.style.border = 'none';
    p5.style.border = 'none';
    p6.style.border = 'none';
}
function pic3(){
    const p1 = document.getElementById("the1");
const p2 = document.getElementById("the2");
const p3 = document.getElementById("the3");
const p4 = document.getElementById("the4");
const p5 = document.getElementById("the5");
const p6 = document.getElementById("the6");
const myDiv = document.getElementById('mastercard');
myDiv.style.backgroundImage = `url(pic3.jpeg)`;
    p3.style.border = '2px solid red';
    p2.style.border = 'none';
    p1.style.border = 'none';
    p4.style.border = 'none';
    p5.style.border = 'none';
    p6.style.border = 'none';
}
function pic4(){
    const p1 = document.getElementById("the1");
const p2 = document.getElementById("the2");
const p3 = document.getElementById("the3");
const p4 = document.getElementById("the4");
const p5 = document.getElementById("the5");
const p6 = document.getElementById("the6");
const myDiv = document.getElementById('mastercard');
myDiv.style.backgroundImage = `url(pic4.jpg)`;
    p4.style.border = '2px solid red';
    p2.style.border = 'none';
    p3.style.border = 'none';
    p1.style.border = 'none';
    p5.style.border = 'none';
    p6.style.border = 'none';
}
function pic5(){
    const p1 = document.getElementById("the1");
const p2 = document.getElementById("the2");
const p3 = document.getElementById("the3");
const p4 = document.getElementById("the4");
const p5 = document.getElementById("the5");
const p6 = document.getElementById("the6");
const myDiv = document.getElementById('mastercard');
myDiv.style.backgroundImage = `url(pic5.jpg)`;
    p5.style.border = '2px solid red';
    p2.style.border = 'none';
    p3.style.border = 'none';
    p4.style.border = 'none';
    p1.style.border = 'none';
    p6.style.border = 'none';
}

function blkpic(){
    const p1 = document.getElementById("the1");
    const p2 = document.getElementById("the2");
    const p3 = document.getElementById("the3");
    const p4 = document.getElementById("the4");
    const p5 = document.getElementById("the5");
    const p6 = document.getElementById("the6");
    const myDiv = document.getElementById('mastercard');
    myDiv.style.backgroundImage = `url(blank.png)`;
    p6.style.border = '2px solid red';
    p2.style.border = 'none';
    p3.style.border = 'none';
    p4.style.border = 'none';
    p1.style.border = 'none';
    p5.style.border = 'none';
}





   
