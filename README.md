<<<<<<< HEAD
# PF_NationNav
=======
Project name: Are you smarter than a country maniac?

Are You Smarter Than a Country Maniac?" is an engaging, interactive educational platform designed to enhance users' geographical knowledge. This project aims to provide an educational platform for children, young adults or anyone who wants to better themselves on geographical knowledge. Users who come across this website will be able to search for various countries, and the search engine will return demographic details for the selected country.

Design Process
Through this project, I aim to create a common platform that could be accessible and easy to use for the general public, and also better myself on front-end programming, with the use of javascript, HTML, CSS and Bootstrap. 

User Stories:
    As a user, I would like to search on my desired countries, and it will output information such as country capital, currency, language, population, region and weather.

    As a user, I would like to participate in an enriching quiz with multiple-choice questions, so that I can test my knowledge on various topics and see my results.

    As a user,  a user accessing the website from a mobile device, I want the quiz to be responsive and easy to navigate on smaller screens, so that I can take the quiz comfortably and with properly sized elements and controls.

Please refer to Figma high-fidelity prototype of the illustration of this project: 


Features
Feature 1 - Search Bar UI
Display a search text field where users can input characters and can type the name of a country (e.g., "Vietnam"). The input should support both partial and full country name searches.

Feature 2 - API Integration
Backend feature that calls Country Location API and weatherstack API to retrieve the country details and weather detail once the user submits the search query. When the user enters a country name and clicks the "Search" button, both APIs are called to retrieve relevant country and weather details. Once data is successfully fetched, details such as the capital, currency, languages, population, region, and weather are shown dynamically on the page.

Feature 3 - Dynamic "See More" Wiki Link
After displaying the country details, a "See more..." link is provided that redirects the user to the country’s Wikipedia page for further reading. The Wikipedia link is dynamically generated based on the country name that has been searched by the user.

Feature 4 - Quiz Display
This quiz consists of multiple-choice questions related to general knowledge about the country or geographical knowledge. It is written on HTML along with back-end logic that checks the selected answer and also prompts if user did not make a selection. Users answer the quiz questions by selecting one of the available options and submitting their answer. Each question is provided in MCQ format, where the feedback (correct/incorrect) is displayed immediately. 

Feature 5 - Mobile Responsiveness
The entire website, including the search bar, country details, and quiz section, is designed to be mobile-friendly and responsive to different screen sizes. In addition to CSS-based responsiveness and using javascript, specific elements and interactions have been specified on how it should behave on mobile interface. The UI components resize and adjust based on the viewport size, ensuring readability and ease of interaction across different devices.

Technologies used
1. HTML
Stucture content of the webpage.

2. CSS
Used for visual presentation of the HTML elements. In this project, CSS is used for layout, design, responsiveness, and styling of components such as the search bar, quiz section, and country details. It ensures the website looks good across various devices.

3. JavaScript
JavaScript is the primary programming language for adding interactivity to the webpage. In this project, JavaScript handles dynamic tasks such as:
    a. Fetching data from APIs (for country information and weather data).
    b. Handling user interactions like clicking the "Search" button or answering quiz questions.
    c. Dynamically displaying country details and quiz feedback.

4. API Integration
Country Location API is used to retrieve key details about a country, such as the capital, currency, languages, population, and region, based on the country name entered by the user. A GET request is made by sending the request to a RapidAPI endpoint, where they return the payload as per mentioned, in JSON format. Weatherstack API is called to retrieve the weather description for the country or city. A GET request is sent to the Weatherstack API with the country name entered by the user, which returns the weather data for that country. 

Testing
Test Case 1 - Valid Country Search (Golden Flow)
Step 1: Open the website in a browser.
Step 2: In the search bar, type the name of a valid country (e.g., "Germany").
Step 3: Click the "Search" button.
Step 4: Wait for the country details to load.
Step 5: Verify the following country details are displayed:
            Capital (e.g., "Berlin")
            Currency (e.g., "Euro")
            Language (e.g., "German")
            Population (e.g., "82 million")
            Region (e.g., "Europe")
            Weather (e.g., "Clear")
Step 6: Verify that the "See more..." link correctly leads to the Wikipedia page for the country.

Test Case 2 - Invalid Country Name
Step 1: Open the website in a browser.
Step 2: In the search bar, type an invalid country name (e.g., "Atlantis" or a misspelled country name).
Step 3: Click the "Search" button.
Step 4: Wait for the API call to process and the error message to display.
Step 5: Verify that the error message reads something like:
"Country not found: Atlantis"

Test Case 3 - Empty Search 
Step 1: Open the website in a browser.
Step 2: Leave the search bar empty (do not type anything).
Step 3: Click the "Search" button.
Step 4: Wait for the error message to appear.
Step 5: Verify that the error message reads something like:
"Please enter a country name!"

Test Case 4 - Quiz: Correct Answer (Golden Flow)
Step 1: Complete Test Case 1 (Valid Country Search) by performing a valid country search (e.g., search for "Germany") to load the quiz section.
Step 2: For the first quiz question ("What is Germany's currency?"), select the correct option (e.g., "Euro").
Step 3: Click the "Submit" button for the question.
Step 4: Verify that the result message displays:
"Correct! Germany's currency is Euro."
The message should appear in green to indicate the correct answer.
Step 5: Repeat for any other quiz questions if applicable.

Test Case 5 - Quiz: Wrong Answer
Step 1: Complete Test Case 1 (Valid Country Search) by performing a valid country search (e.g., search for "Germany") to load the quiz section.
Step 2: For the first quiz question ("What is Germany's currency?"), select an incorrect option (e.g., "Dollar").
Step 3: Click the "Submit" button for the question.
Step 4: Verify that the result message displays:
"Incorrect. Germany's currency is Euro."
The message should appear in red to indicate the incorrect answer.
Step 5: Repeat for any other quiz questions if applicable.

Test Case 6 - Quiz: Unanswered question
Step 1: Complete Test Case 1 (Valid Country Search) by performing a valid country search (e.g., search for "Germany") to load the quiz section.
Step 2: For the first quiz question ("What is Germany's currency?"), do not select any answer (leave the radio buttons unselected).
Step 3: Click the "Submit" button for the question.
Step 4: Verify that the result message displays:
"Please select an answer."
The message should appear in red to indicate the missing answer.
Step 5: Repeat for any other quiz questions if applicable.

Credit
    Content
Country information sourced from the Country Location API via RapidAPI.
Weather information sourced by Weatherstack API.
"See More" link for each country directs users to the relevant Wikipedia page for further reading.
    Media
Country Map background picture from free image platform Pexels.
    Acknowledgements
A special thank you to my school lecturer for providing valuable advice, guidance, and constructive feedback throughout the development process.
I received inspiration for this project from various online resources (e.g., YouTube tutorials, ...). Specifically, I found inspiration in projects that integrated API calls to fetch dynamic country and weather data.


>>>>>>> a187220 (Remove .DS_Store file from the repository)
