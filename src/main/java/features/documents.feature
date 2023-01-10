Feature: Free CRM Login feature

Scenario: Free CRM Login Test Scenario

Given user is on index Page
When title of login page is Free CRM
Then user should click login button
Then user enters username and password
|username|password|
| paruldesai41@gmail.com  |  Parul@123 |
Then user clicks on login button
Then user is on homepage
Then user move to new document page
Then user enters documents details
|    title   | deal |
| test deal1 |3000|
| test deal2 |2000|
| test deal3 |1000|
Then user close the browser

