## Quantified Self Calorie Tracker
### Created by Desislava Todorova and JF Lalonde

* Quantified Self is a calorie tracker app built in JavaScript with a backend built using Node. The app tracks calories for each meal of the day, including snacks.
* Add foods from an existing database or create new foods with their corresponding calories

### API Enpoints Data is coming from
* Data is saved to a postgresql database running in production on Heroku at this address: https://quantified-self-node.herokuapp.com/
* Endpoints available are as follows:
### Food Endpoints:
* GET /api/v1/foods - returns all foods currently in the database
* GET /api/v1/foods/:id - returns the food object with the specific :id you've passed in or 404 if the food is not found
* POST /api/v1/foods - allows creating a new food with the parameters: 
  { food: { name: "Name of food here", calories: "Calories here"} }
If food is successfully created, the food item will be returned. If the food is not successfully created, a 400 status code will be returned. Both name and calories are required fields.
* PATCH /api/v1/foods/:id - allows one to update an existing food with the parameters:
{ food: { name: "Name of food here", calories: "Calories here"} }
If food is successfully updated (name and calories are required fields), the food item will be returned. If the food is not successfully updated, a 400 status code will be returned.
* DELETE /api/v1/foods/:id - will delete the food with the id passed in. If the food can't be found, a 404 will be returned.
Meal Endpoints:
* GET /api/v1/meals - returns all the meals in the database along with their associated foods
* GET /api/v1/meals/:meal_id/foods - returns all the foods associated with the meal with an id specified by :meal_id or a 404 if the meal is not found
* POST /api/v1/meals/:meal_id/foods/:id - adds the food with :id to the meal with :meal_id
This creates a new record in the MealFoods table to establish the relationship between this food and meal. If the meal/food cannot be found, a 404 will be returned.
* DELETE /api/v1/meals/:meal_id/foods/:id - removes the food with :id from the meal with :meal_id
This deletes the existing record in the MealFoods table that creates the relationship between this food and meal. If the meal/food cannot be found, a 404 will be returned.

Quantified Self Webpack

To get you started building your Quantified Self app.

Initial Setup

One person from your project will set up the repository. That one person should follow these steps:

Clone this starter kit repository and rename the repository to quantified-self in one command
git clone git@github.com:turingschool-examples/quantified-self-starter-kit.git quantified-self
Change into the quantified-self directory

Remove the default remote (origin)

git remote rm origin
Create a new repository on GitHub named quantified-self

Add your new repository remote - your remote URL and user name will be different in the command below

git remote add origin git@github.com:neight-allen/quantified-self.git
Install the dependencies of the starter kit
npm install
Add, commit, and push up to your repository
git add .
git commit -m "Initial commit using starter kit"
git push origin master
Now add your team member(s) as collaborators to the repository. They can now clone down your quantified-self repository as normal.

Once each partner clones down the repo, they need to run npm install to install the dependencies on their machine.

Github Pages setup

Visit your repository on Github

Go to Settings

Under the Github Pages section of Options, select 'master' as your source

Be sure to npm run build and commit before each push to master. A few seconds after you push up, you should be able to see your application at https://your-github-username.github.io/quantified-self.

Run the Server

To see your code in action, you need to fire up a development server. Use the command:

npm start
Once the server is running, visit in your browser:

http://localhost:8080/webpack-dev-server/ to run your application.
http://localhost:8080/webpack-dev-server/test.html to run your test suite in the browser.
To build the static files. This must be done before committing and pushing if you want your site to work at github.io:

npm run build
Run Tests in the Terminal

To run all of your tests:

npm test
File Organization

Webpack is a little opinionated about how files are organized. Here is a brief guide on how to organize development and test files.

Development Files

Node and webpack work together to help us organize our files and keep responsibilities separated.

For example, if we have the lib/index.js file and a lib/food.js file:

lib/index.js

var Food = require('./food');

var someFood = new Food();
lib/food.js

function Food(food, calories) {
  this.name = name;
  this.calories = calories;
}

Food.prototype.edit = function () {
  //Some cool storage stuff here
};

module.exports = Food;
All of the food.js code could live in the index.js file, but that would go against our philosophy of separating responsibility between files.

There are two main things to pay attention to here:

At the top of the index.js file, we require the food.js file using the line of code var Food = require('./food'); (we leave out the .js). This brings in the code from the food.js file so we can use that file's code in the index.js file.

In the food.js file, the bottom line says module.exports = Food; which says what we want this file to export when we say require in other files, like in index.js.

So now we have two files that can share code between each other, but we have to pay attention to what we export and what we require. If we didn't do this, then when we try to make a new Food in the index.js file, it won't know what Food we're talking about!

Test Files

Near the end of quantified self, you will have multiple objects for your project that are tested separately with individual test files. The test/index.js file serves as an "entry point" for mocha to load all of the tests you write.

Test file organization is a bit different from development files. If we want to test the food.js file from above, then this is how we would do it. For each object file (in this case food.js), we want to have a corresponding test file. So in the test directory, we would create a new file called test/food-test.js. Here is what that file would look like:

test/food-test.js

var chai = require('chai');
var assert = chai.assert;

var Food = require('../lib/food');

describe('Food', function() {
  context('can create a new food', function() {
    // Your tests here...  
  });  
});
test/index.js

require('./food-test')
Two main points to pay attention to:

In the food-test.js file, we require the food.js file so that we can construct foods in our tests.

In the test/index.js file, we require the food-test.js file so that we can view the test results in the browser (at http://localhost:8080/webpack-dev-server/test.html). But most of the time, you'll just run your tests in the terminal with npm test
