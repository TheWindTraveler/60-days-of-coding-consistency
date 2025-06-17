let jokeDisplayElement = document.querySelector("#joke");
let jokeButtonElement = document.querySelector("#jokeBtn");

jokeButtonElement.addEventListener('click', generateJokes);


// Async/Await
async function generateJokes() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();

    jokeDisplayElement.textContent = data.joke;
};

// generateJokes();
