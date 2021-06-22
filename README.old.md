# Ask NASA

## Story

With the JavaScript fetch API based "GET request" you can connect to publicly available servers and get structured data. 
Did you know that NASA has a lot of open API?
In this project you will start working with an open API and requesting data from the NASA API.

Your task is to get data from the APOD API and recreate their website with a little bit of more functionality.

## What are you going to learn?

- Creating a GET request
- Getting data from an open NASA API

## Tasks

1. Everyday a new image is uploaded to the APOD server. Create a page where these pictures with other information are shown. 
    - When we open up the page, an image with a title and an explanation shows up
    - The data is matching with the information on `https://apod.nasa.gov/apod/astropix.html`

2. Create an input where we can see earlier days images.
    - There is an input where we can pick an older date
    - When we picked an older date, the data in the page change
    - If we choose the date `2020 September 2`, the data match with the information on `https://apod.nasa.gov/apod/ap200902.html`

3. [OPTIONAL] Create a gallery where multiple images are next to each other. If the user click on one of the images, the information about the picture shows up.
    - In the landing page, there is a `Gallery` menu point that brings us to an image gallery
    - The gallery contains earlier images next to each other
    - When we click on one of the images, the image and information about the image shows up in a bigger modal

## General requirements

None

## Hints

- First get familiar with fetch API.
- Then start the project, use the command `npx create-react-app <project name>` in the terminal.
- To get the data you can use the `DEMO_KEY` API Key or create you own Nasa API Key for the project. If you use the demo key, it has a stict limitation regarding the amount of requests you make. More info is on the API documentation.

## Background materials

- <i class="far fa-exclamation"></i> [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- <i class="far fa-exclamation"></i> [JavaScript Fetch API Examples](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
- <i class="far fa-exclamation"></i> [Nasa APIs](https://api.nasa.gov)
