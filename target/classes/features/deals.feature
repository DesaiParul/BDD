Feature: Deal Data Creation

Scenario: Free CRM Create a New Deal Scenario

Given user is on index Page
When title of login page is Free CRM
Then user should click login button
Then user enters username and password
| paruldesai41@gmail.com  |  Parul@123 |
Then user clicks on login button
Then user is on homepage
Then user move to new deal page
Then user enters deal details
| test deal | 3000 | 50 |
Then user close the browser