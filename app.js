    // Calculate and set the height of the card to match its width
    window.addEventListener('load', function() {
        console.log("hello")
        const card = document.getElementById('squareCard');
        const cardWidth = card.clientWidth;
        const cardHeight = card.clientHeight;
        if(cardHeight < cardWidth)
            card.style.height = `${cardWidth}px`;
        else
            card.style.width = `${cardHeight}px`;
    });

// Replace 'your-csv-file.csv' with the actual path or URL of your CSV file
const csvFilePath = './shayari.csv';

// Arrays to store the data from the first three columns
const column1 = [];
const column2 = [];
const column3 = [];

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
        column1.push(columns[0]);
        column2.push(columns[1]);
        column3.push(columns[2]);
      }
    });

    // Print or use the extracted arrays
    console.log('Column 1:', column1);
    console.log('Column 2:', column2);
    console.log('Column 3:', column3);
  })
  .catch(error => {
    console.error('Error fetching or processing the CSV:', error);
  });


   
