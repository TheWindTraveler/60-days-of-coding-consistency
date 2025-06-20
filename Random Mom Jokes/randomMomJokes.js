let jokeElement = document.getElementById("joke");
let jokeButtonElement = document.getElementById("jokebtn");

jokeButtonElement.addEventListener('click', generateMomJokes);

async function generateMomJokes() {
    const config = {
        headers: {
            accept: 'application/json',
        },
    };

    try {
        const response = await fetch(
            'https://cors-anywhere.herokuapp.com/https://www.yomama-jokes.com/api/v1/jokes/random/',
            config
        );

        const data = await response.json();
        jokeElement.textContent = data.joke;
    } catch (error) {
        console.error("Failed to fetch mom jokes", error);
        jokeButtonElement.textContent = "Oops! Could not fetch mom jokes at this moment, please try again!";
    }
    
}