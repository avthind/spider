document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("text");
    const quoteAuthor = document.getElementById("author");
    const newQuoteBtn = document.getElementById("new-quote");
    const tweetQuoteBtn = document.getElementById("tweet-quote");

    async function fetchQuote() {
        try {
            const response = await fetch("https://api.quotable.io/random");
            if (!response.ok) throw new Error("Failed to fetch quote");
            
            const data = await response.json();
            updateQuote(data.content, data.author);
        } catch (error) {
            updateQuote("Oops! Something went wrong.", "Unknown");
        }
    }

    function updateQuote(text, author) {
        quoteText.textContent = text;
        quoteAuthor.textContent = `— ${author}`;
        tweetQuoteBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" - ${author}`)}`;
    }

    newQuoteBtn.addEventListener("click", fetchQuote);

    fetchQuote(); // Load quote on page load
});
