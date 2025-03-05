function getUsers() {
    let random = Math.ceil(Math.random() * 1000);
    console.log(random);
    fetch(`https://dummyjson.com/quotes/${random}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.quote);
            document.getElementById('quote').innerText = data.quote;
        })
}
function copyQuote() {
    const quoteText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(quoteText)
        .then(() => {
            console.log('copy');
        })
        .catch(err => {
            console.error(err);
        });
}
getUsers();
document.getElementById('copy-button').addEventListener('click', copyQuote);