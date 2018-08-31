# Minion /REACH/
**BELLOOO!!** I mean.. Hello! Welcome to Minion Reach, a ~~word guessing game~~ challenging mission in which you are asked to deciper the codes set up by mischievous minions. Minions really love bananas and they locked us out of our own farm! Guess the correct code to get in and get them out of the banana farm before it's too late. Each mistake allows a minion to sneakily enter the farm, and the mission will be over when 6 minions are able to enter. It won't be easy! The minions have a very extensive vocabulary. Are you up for the challenge? :bowtie:

<hr />

_This is a word guessing game created with React.js and Ruby on Rails and has been tested on a Google Chrome browser. This game is experienced best at or above a width of 1000px._

## Demo
![Walkthrough of Game](Walkthrough.gif)

Live App: [Minion Reach Demo](https://minion-reach.herokuapp.com/)

## Planning Out
My first step was to figure out how to recreate a childhood game I so often played on chalkboard and paper into an interactive web app and provide a similar experience. The rules of a word-guessing game (aka Hangman) are pretty straightforward. Two players are involved, in which player 1 has a secret word in mind and player 2 is given a finite number of chances to guess the word to completion.

In order to display the secret word, I chose to use underscores '_' just like in the games we play by hand. The object holding the secret word needed to be easily manipulated and accessible at certain indices, which naturally led to using arrays as the data structure to hold the secret word.

Once I figured that a word like "minion" would be represented as ['\_', '\_', '\_', '\_', '\_', '\_',], I needed to figure out how I would update each index when the user guessed the correct letter, and then compare that to the secret word (a string) that is saved in Redux state. There were a few edge cases to consider:
* How do I make sure that a single input of 1 letter made sure to replace *all* occurrences of the letter in the word and not just the first one it finds?
* Since the user could input via keyboard, how do I handle lowercased and uppercased letters?
* How do I make sure that punctuation and other keys that are not in the alphabet are not detected as inputs?
* How do I show the user the letters that they already guessed whether the input came via keyboard or the on-screen keyboard?

In order to address these concerns, I had to implement a few conditionals and loops that I have marked in the comments of my code.

Once I had the game logic working, I wanted to include a leaderboard for users who chose to sign up and log in, which required me to build a database and model in the server side. I originally thought that I would need two separate models, a User and a Leaderboard model, but since there is only one leaderboard that shows the top 10 users of the game, I wrote a method in the users controller that returns the top 10 users sorted by score.

I really enjoyed the process of creating this application and hope that users are able to enjoy it as much as I do. Thank you to the REACH team for assigning such an awesome coding challenge!

## Features
* 4 Levels of Difficulty (Easy, Normal, Hard, Bananas)
* Leaderboard Displaying Top 10 Players (Only users who are logged in will be able to save scores)
    * Scores are awarded based on level completed
        * Easy &rarr; +10 points
        * Normal &rarr; +30 points
        * Hard &rarr; +50 points
        * Bananas &rarr; +100 points
* User Input Via On-Screen Keyboard or User Keyboard (Window focus must be inside game container)

## Getting Started
#### Compressed File Containing Both Client & Server Directory:
Please cd into the client directory and server directory in two different terminals and follow directions below to run locally.

#### Cloning from GitHub
Please clone both client and server repositories.

The client repository can be found at: [Minion Reach Client](https://github.com/hyoyou/minion-reach-client)

The server repository can be found at: [Minion Reach Server](https://github.com/hyoyou/minion-reach-api)

After cloning the repo, please cd into each directory and follow the directions below to run locally.

#### Playing Locally
In the client directory, please run `npm install && npm start` to start the server. In a browser, navigate to `http://localhost:3000/` to begin. (Note: you may be using a different port number. Please update accordingly)

Please start a PostgreSQL server on your computer prior to running the database commands below. PostgreSQL can be downloaded [here](https://www.postgresql.org/). If Homebrew is installed, you can run `brew install postgresql`.

In the server directory, run `bundle install` to install dependencies. Run `rake db:create` to create the database, then `rake db:migrate` to migrate local database. To start the application on your machine, run `rails s -p 3001` (Note: you may be using a different port number. Please update accordingly).

When the server successfully runs, you should be able to ~play the game~ begin your mission at `http://localhost:3000/`. The default level of difficulty is set to 'normal'. 

## Implementation
#### Client Side
The front-end design has been implemented using React.js along with Redux to manage application state. With React, I can easily render a number of components and automatically update state changes seamlessly as a single-page application. The React state managed in the Game Container component consisted of..
* gameState, which is an array holding the current state of the game (after fetching the secret word, which is saved in application state, the gameState is an array holding underscores '_' of the hidden letters of the secret word)
* wrongGuesses, which is an array holding the letters that the user guessed which are not part of the secret word
* lives, which starts out at 6 and decrements with each wrong guess
* toggle, which is a boolean value that shows or hides the end of game modal
* win, which is a boolean value indicates if the game is over or not

The user is given an option to choose a difficulty on the home page, which is saved to application state so that the level chosen will be remembered thoughout the game even when the user navigates back and forth to other pages. When the "Start Game" button is pressed, they are directed to the game play page and a fetch request is made to the server upon page load, which requests the word list for the chosen difficulty from an external dictionary API and sends it back to the client. This word is saved in our application state, which is then accessed by component state to update its values. Further gameplay only updates the component state until the game is over and a logged in user has won, in which case an action will be dispatched so that the user's data is updated with the score. 

#### Server Side
![Server Set Up](https://s3.amazonaws.com/minionreach/ServerDesign.jpg)

The back-end of this application is set up using Ruby on Rails. I had initially planned to implement a server to manage users, but also ended up making calls to the external API from the server due to CORS issues trying to fetch from the client-side. I have never tried this set up before of making a controller whose purpose is to only make calls to another API, so I had to give it some thought and try planning it out, as shown in the diagram above. I feel like making a call to the API from the server to pass on back to the client feels like an extra step, and I would love to find out how to implement this better in later versions of this application.

The user authentication between the Rails server and React client is completed using JSON Web Token(JWT). Upon successful creation (sign up) of a user, the server sends back a token to the client, and this token must be included in the header for future communications with the server regarding any action that needs authentication.

## Further Versions
The current version is lacking in responsive design and assessibility(a11y). In future versions, I would like to improve upon thesexw design features to make the application available to a wider range of users and on different devices.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/hyoyou/minion-reach-client. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License
The project is available as open source under the terms of the [MIT License](https://github.com/hyoyou/minion-reach-client/blob/master/LICENSE).