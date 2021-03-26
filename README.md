# Endless_Fight
Endless Fight, a turn base boss run game where you play  as the cat-mmn James and the Mage name Nia. 

## Project Link
### [Plot Master](https://plot-master.herokuapp.com/#/)

#### Example Login:
> Username: EXAMPLEUSER
>
> Password: 1234


## Contributors
* **David Hall** https://github.com/Dhall88
* **Jane Nath** https://github.com/janenath
* **Leonardo Santana** https://github.com/theleonsantana
* **Michael DiChello** https://github.com/mikedichello


## Technologies Used
* [React JS](https://reactjs.org/) - Frontend web framework
* [Node.js](https://nodejs.org/en/) - Runtime environment
* [Express](https://expressjs.com/) - Backend web framework
* [MongoDB](https://www.mongodb.com/) - Database
* [Mongoose](https://mongoosejs.com/) - Data modeling
* HTML5
* CSS, [SASS](https://sass-lang.com/)
* User Authorization:
    * [JSON Web Tokens](https://jwt.io/)
    * [Passport](http://www.passportjs.org/)
    * [Axios](https://www.npmjs.com/package/axios)
* Additional Tools: 
    * [Webpack](https://webpack.js.org/) - Module bundler
    * [Gulp](https://gulpjs.com/) - Task runner
    * [Babel](https://babeljs.io/) - JS compiler
    * [Github](https://github.com/) - Version control
    * [Heroku](https://www.heroku.com/) - Deployment platform
    
   
## Our Process

#### User Stories
* The user should be able to create a garden plot with custom dimensions and plantings
* The user should be able to save created garden plots to their user profile 
* The user should be able to edit or delete a saved garden plot
* The user should be able to view a chart of data for the plants in their plot, including planting and harvesting times
* The user should be able to view a reference page with information about all plants
* The user should be able to sign up for a user account, log in, and log out

#### Wireframing:
![wireframe](https://i.imgur.com/24SncGg.png "wireframe")

#### Visual Brainstorming:
![moodboard](https://i.imgur.com/hiojRYP.jpg "moodboard")

#### Design Mockups:
![homepage mockup](https://i.imgur.com/aPZYF17.png "homepage mockup")
![plot mockup](https://i.imgur.com/St81O6B.png "plot mockup")
![planting chart mockup](https://i.imgur.com/9JwTM3b.png "planting chart mockup")


## Challenges/Future Goals
* User authorization is functional, but not yet related to the Plots model. In the future we would like to create a relationship between the two models, so that plots are saved only for their users.
* We originally planned to use a third-party API, Trefle, to pull in a larger database of plants. However, many information fields with this API were listed as "null", and it became simpler to just create our own data for our initial production release. In the future we would like to figure out a more scalable solution to increase the size of our database.
* Another goal is to customize planting/harvesting time recommendations based off of a user's specified zipcode, using WeatherUnderground API's location-based frost dates.
* We also would like to explore using React DnD to create a drag and drop interface for the plot creation component


## Special Thanks
* The General Assembly SEIR-FLEX-ADA instructional team, with a special shoutout to [Arthur Bernier Jr.](https://github.com/arthurbernierjr) for his mentorship and support
