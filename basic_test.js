require('dotenv').config();
Feature('Basic');

Scenario('Test the Github Reachability', ({ I }) => {
    I.amOnPage('https://github.com/');
    console.log("From Env file"+process.env.APP_NAME);
});
