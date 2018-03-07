# Monsters

API for the Monsters app, built with JavaScript and Express, deployed on Heroku.

The Monsters app takes in a negative thought or fear and gives it a personality. When your monster says your thought back to you, it's easy to see that monsters can't always be trusted.

[Visit the site](https://monstersofmine.firebaseapp.com/)

[Visit the server](https://damp-headland-17256.herokuapp.com/combined)

[View the frontend code](https://github.com/amberjohnsonsmile/monsters-frontend/)

![screenshot](screenshot.png)

## Technologies
* HTML
* CSS
* JavaScript
* Flexbox
* Node.js
* Express.js
* Heroku
* Firebase

## Local Installation Instructions
If you would like to run this API locally, follow these steps:

1. Create a fork of this repo

1. Clone it to your local machine

1. Navigate to the new folder on the command line and run `npm install`

1. Run `npm run dev`

1. Visit the API in your web browser at localhost:3000 with the following endpoints:

* GET
  * `/monsters` lists all monsters
  * `/translators` lists functions for translating into monster-speak
  * `/combined` lists monsters and their associated translation methods
* POST
  * `/combined` creates new monster (note - translator will be added automatically)


## Contact

Amber Johnson, Full Stack Web Developer

![headshot](https://user-images.githubusercontent.com/31632938/36687590-517de15e-1ae7-11e8-8753-5c28cefd5e69.jpeg)
* Email amberjohnsonsmile@gmail.com
* Portfolio [amberjohnsonsmile.co](https://amberjohnsonsmile.co)
* GitHub [@amberjohnsonsmile](https://github.com/amberjohnsonsmile)
* LinkedIn [@amberjohnsonsmile](https://linkedin.com/in/amberjohnsonsmile)

## License

MIT
