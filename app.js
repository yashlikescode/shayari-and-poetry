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


    fetch("./shayari.csv")
        .then(function(response) {
            return response.text();
        })
        .then(function(csvData) {
            // Process the CSV data here
            console.log(csvData);
        })
        .catch(function(error) {
            console.error('Error fetching CSV:', error);
        });

   
