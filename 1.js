function getUsers() {
    const random = Math.ceil(Math.random() * 30);
    console.log(random);

    fetch(`https://dummyjson.com/quotes/${random}`)
        .then((response) => response.json())
        .then((data) => {
            const quote = data.quote;
            const quoteElement = document.getElementById('quote');
            quoteElement.textContent = quote;

          
            const copyButton = document.getElementById('copy-button');
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(quote)
                    .then(() => {
                        console.log('Quote copied to clipboard:', quote);
                    })
                    .catch((error) => {
                        console.error('Error copying quote:', error);
                    });
            });
        })
        .catch((error) => {
            console.error('Error fetching the quote:', error);
            document.getElementById('quote').textContent = 'Failed to load the quote.';
        });
}

getUsers();
