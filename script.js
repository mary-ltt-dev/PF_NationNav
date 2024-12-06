let countryInput = document.getElementById("country-name");
let searchButton = document.getElementById("search-button");
let quizContainer = document.getElementById("quiz-container");

searchButton.addEventListener("click", async () => {
    let countryName = countryInput.value.trim();
    const seeMoreDiv = document.getElementById('seeMore'); //** */

    // Hide the "See more..." link initially
    seeMoreDiv.style.display = 'none';

    if (!countryName) {
        document.getElementById("result").innerHTML = "Please enter a country name!";
        return;
    }

    try {
        // First API call
        let countryInfoResponse = await fetch(`https://country-location-api.p.rapidapi.com/location?country=${countryName}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f5f3bd74ebmsh7519b41a48158b3p140b44jsn728da145c064',
                'x-rapidapi-host': 'country-location-api.p.rapidapi.com'
            }
        });

        if (!countryInfoResponse.ok) {
            throw new Error(`Country not found: ${countryName}`);
        }

        let countryData = await countryInfoResponse.json();
        console.log(countryData);

        let country = countryData.location;

        let capital = country.capital || 'N/A';
        let currency = country.currencies && country.currencies.length > 0
            ? country.currencies.join(', ') 
            : 'N/A';
        let language = country.languages && country.languages.length > 0
            ? country.languages.join(', ') 
            : 'N/A';
        let population = country.population ? country.population.toLocaleString() : 'N/A';
        let region = country.region || 'N/A';

        document.getElementById("capital").textContent = `Capital: ${capital}`;
        document.getElementById("currency").textContent = `Currency: ${currency}`;
        document.getElementById("language").textContent = `Language: ${language}`;
        document.getElementById("population").textContent = `Population: ${population}`;
        document.getElementById("region").textContent = `Region: ${region}`;

        // Second API call for weather info
        let weatherResponse = await fetch(`https://api.weatherstack.com/current?access_key=fb3d28561309d7d007d47724c89221a9&query=${countryName}`);

        if (!weatherResponse.ok) {
            throw new Error('Weather information not found');
        }

        let weatherData = await weatherResponse.json();
        console.log(weatherData);

        let weatherDescription = weatherData.current && weatherData.current.weather_descriptions && weatherData.current.weather_descriptions[0]
            ? weatherData.current.weather_descriptions[0]
            : 'Weather data not available';

        document.getElementById("weather").textContent = `Weather: ${weatherDescription}`;

        // Now show the "See more..." link with a dynamic Wikipedia URL
        showSeeMoreLink(countryName);  

        // Debugging the visibility of the quiz container
        // console.log("Quiz container before display change:", quizContainer);

        // Show the quiz section after the search
        quizContainer.style.display = 'block';  // Show the quiz section
        // console.log("Quiz container displayed:", quizContainer.style.display);

    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerHTML = `Error: ${error.message}`;
    }
});

// Function to show the "See more..." link with the correct Wikipedia URL
function showSeeMoreLink(countryName) {
    const seeMoreDiv = document.getElementById('seeMore');
    const seeMoreLink = seeMoreDiv.querySelector('a');
    
    if (!seeMoreDiv || !seeMoreLink) {
        console.error('Error: Could not find seeMoreDiv or seeMoreLink.');
        return;
    }

    const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(countryName)}`;
    console.log('Wiki URL:', wikiUrl);

    seeMoreLink.href = wikiUrl;
    seeMoreDiv.classList.add('show'); // Add the 'show' class to display it

    console.log('See more link should be visible now.');
};

// Quiz functionality

// Function to submit and check the first question
function submitQ1() {
    const resultQ1 = document.getElementById("resultQ1");
    const selectedOption = document.querySelector('input[name="q1"]:checked'); // Get selected radio button for q1

    if (!selectedOption) {
        resultQ1.textContent = "Please select an answer.";
        resultQ1.style.color = "red";
        return;
    }

    const answer = selectedOption.value;
    if (answer === "A") {
        resultQ1.textContent = "Correct! Germany's currency is Euro.";
        resultQ1.style.color = "green";
    } else {
        resultQ1.textContent = "Incorrect. Germany's currency is Euro.";
        resultQ1.style.color = "red";
    }
};

// Function to submit and check the second question (True/False)
function submitQ2() {
    const resultQ2 = document.getElementById("resultQ2");
    const selectedOption = document.querySelector('input[name="q2"]:checked'); // Get selected radio button for q2

    if (!selectedOption) {
        resultQ2.textContent = "Please select an answer.";
        resultQ2.style.color = "red";
        return;
    }

    const answer = selectedOption.value;
    if (answer === "false") {
        resultQ2.textContent = "Correct! Ho Chi Minh City is not the capital of Vietnam.";
        resultQ2.style.color = "green";
    } else {
        resultQ2.textContent = "Incorrect. Ho Chi Minh City is not the capital of Vietnam.";
        resultQ2.style.color = "red";
    }
};

// Function to submit and check the third question
function submitQ3() {
    const resultQ3 = document.getElementById("resultQ3");
    const selectedOption = document.querySelector('input[name="q3"]:checked'); // Get selected radio button for q3

    if (!selectedOption) {
        resultQ3.textContent = "Please select an answer.";
        resultQ3.style.color = "red";
        return;
    }

    const answer = selectedOption.value;
    if (answer === "B") {
        resultQ3.textContent = "Correct! Singapore has 4 official languages.";
        resultQ3.style.color = "green";
    } else {
        resultQ3.textContent = "Incorrect. Singapore has 4 official languages.";
        resultQ3.style.color = "red";
    }
};